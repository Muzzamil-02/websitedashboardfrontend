// app/api/article-details/route.js
import dbConnect from "@/lib/dbConnect";
import Article from "@/models/Article";
import ArticleDetail from "@/models/ArticleDetail";

export async function POST(request) {
  await dbConnect();

  try {
    const details = await request.json();

    if (!Array.isArray(details)) {
      return new Response(
        JSON.stringify({ success: false, message: "Array expected" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const articleIds = details.map((d) => d.article);
    console.log("Article IDs: ", articleIds);
    const existingArticles = await Article.find({
      _id: { $in: articleIds },
    }).lean();

    const existingArticleIds = new Set(
      existingArticles.map((a) => a._id.toString())
    );
    console.log("existingArticleIds: ", existingArticleIds);

    const validDetails = details.filter((d) =>
      existingArticleIds.has(d.article)
    );

    console.log("validDetails: ", validDetails);

    if (validDetails.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "No valid articles" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    const detailOps = validDetails.map((detail) => ({
      updateOne: {
        filter: { article: detail.article },
        update: {
          $set: {
            content: detail.content,
            lastUpdated: new Date(),
          },
          $inc: { views: 0 },
        },
        upsert: true,
      },
    }));

    const result = await ArticleDetail.bulkWrite(detailOps, { ordered: false });

    return new Response(
      JSON.stringify({
        success: true,
        processedCount: result.upsertedCount + result.modifiedCount,
        skippedCount: details.length - validDetails.length,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message.includes("Cast to string")
          ? "Invalid content format - must be object"
          : error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
