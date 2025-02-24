// src/app/api/article-details/[id]/route.js
import dbConnect from "@/lib/dbConnect";
import ArticleDetail from "@/models/ArticleDetail";

export async function GET(request, { params }) {
  await dbConnect();

  const { id } = await params;

  try {
    const articleDetail = await ArticleDetail.findOne({ article: id }).populate(
      "article"
    );

    if (!articleDetail) {
      return new Response(
        JSON.stringify({ message: "Article detail not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(articleDetail), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
