// src/app/api/languages/route.js
import dbConnect from "@/lib/dbConnect";
import Language from "@/models/Language";

export async function GET(request, { params }) {
  await dbConnect();

  try {
    const { lang } = await params;

    if (!lang) {
      return new Response(
        JSON.stringify({ message: "Language code is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const language = await Language.findOne({ code: lang }).select(
      "pages -_id"
    );

    if (!language) {
      return new Response(JSON.stringify({ message: "Language not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(language), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
