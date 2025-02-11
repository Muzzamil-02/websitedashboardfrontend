import dbConnect from "@/lib/dbConnect";
import Language from "@/models/Language";

export async function PUT(request, { params }) {
  await dbConnect();
  const { lang, page } = await params;
  const securityHeaders = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };

  try {
    const body = await request.json();
    if (!body.sections || !Array.isArray(body.sections)) {
      return new Response(JSON.stringify({ error: "Invalid request format" }), {
        status: 400,
        headers: securityHeaders,
      });
    }

    const existing = await Language.findOne({
      code: lang,
      "pages.slug": page,
    }).select("pages.$");

    const existingSections = existing?.pages?.[0]?.sections || [];

    const updateOps = body.sections.map((section) => {
      const exists = existingSections.some((s) => s.slug === section.slug);

      return {
        updateOne: {
          filter: {
            code: lang,
            "pages.slug": page,
            ...(exists && { "pages.sections.slug": section.slug }),
          },
          update: exists
            ? {
                // Update existing section
                $set: {
                  "pages.$[page].sections.$[section]": section,
                  "pages.$[page].lastModified": new Date(),
                },
              }
            : {
                // Add new section
                $push: {
                  "pages.$[page].sections": section,
                },
                $set: {
                  "pages.$[page].lastModified": new Date(),
                },
              },
          arrayFilters: [
            { "page.slug": page },
            ...(exists ? [{ "section.slug": section.slug }] : []),
          ],
        },
      };
    });

    if (!existing) {
      updateOps.push({
        updateOne: {
          filter: { code: lang },
          update: {
            $push: {
              pages: {
                slug: page,
                sections: body.sections,
                metadata: {},
                lastModified: new Date(),
              },
            },
          },
          upsert: true,
        },
      });
    }

    const bulkResult = await Language.bulkWrite(updateOps);

    const updatedDoc = await Language.findOne({
      code: lang,
      "pages.slug": page,
    })
      .select("-pages.sections._id")
      .lean();

    return new Response(
      JSON.stringify({
        success: true,
        data: updatedDoc.pages.find((p) => p.slug === page),
        modified: bulkResult.modifiedCount + bulkResult.upsertedCount,
      }),
      {
        status: 200,
        headers: securityHeaders,
      }
    );
  } catch (error) {
    console.error("PUT Error:", error);
    return new Response(
      JSON.stringify({
        error: "Server error",
        details: process.env.NODE_ENV === "development" ? error.message : null,
      }),
      {
        status: 500,
        headers: securityHeaders,
      }
    );
  }
}
