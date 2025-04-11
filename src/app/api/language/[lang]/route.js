import dbConnect from "@/lib/dbConnect";
import Language from "@/models/Language";

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function GET(request, { params }) {
  await dbConnect();

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const { lang } = params;

    if (!lang) {
      return new Response(
        JSON.stringify({ message: "Language code is required" }),
        {
          status: 400,
          headers,
        }
      );
    }

    const language = await Language.findOne({ code: lang }).select(
      "pages -_id"
    );

    if (!language) {
      return new Response(JSON.stringify({ message: "Language not found" }), {
        status: 404,
        headers,
      });
    }

    return new Response(JSON.stringify(language), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers,
    });
  }
}
