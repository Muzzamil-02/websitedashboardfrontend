// app/api/articles/route.js
import dbConnect from "@/lib/dbConnect";
import Article from "@/models/Article";
import mongoose from "mongoose";

export async function POST(request) {
  await dbConnect();

  try {
    const articles = await request.json();

    if (!Array.isArray(articles)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Expected array of articles",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const bulkOps = articles.map((article) => ({
      updateOne: {
        filter: { _id: article._id || new mongoose.Types.ObjectId() },
        update: {
          $set: {
            title: article.title,
            image: article.image,
            description: article.description,
            category: article.category,
            categoryLink: article.categoryLink,
            date: article.date || new Date(),
          },
        },
        upsert: true,
      },
    }));

    const result = await Article.bulkWrite(bulkOps, { ordered: false });

    const processedIds = [
      ...Object.values(result.upsertedIds || {}),
      ...Object.values(result.insertedIds || {}),
    ].map((id) => id.toString());

    const processedArticles = articles.map((article, index) => ({
      ...article,
      id: processedIds[index] || article._id,
    }));

    return new Response(
      JSON.stringify({
        success: true,
        data: processedArticles,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Bulk operation error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || "Server error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  await dbConnect();
  try {
    const articles = await Article.find().sort({ date: -1 });
    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}

export async function DELETE(request) {
  await dbConnect();

  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, message: "Article ID is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const result = await Article.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "Article not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Article deleted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Delete operation error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || "Server error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
