// src/app/api/languages/route.js
import dbConnect from "@/lib/dbConnect"; // Adjust the path as necessary
import Language from "@/models/Language"; // Adjust the path as necessary

export async function POST(request) {
  await dbConnect();

  try {
    const { code, pages } = await request.json();

    if (!code) {
      return new Response(
        JSON.stringify({ message: "Language code is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newLanguage = new Language({
      code,
      pages: pages || [],
    });
    await newLanguage.save();

    return new Response(
      JSON.stringify({
        message: "Language added successfully",
        language: newLanguage,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return new Response(
        JSON.stringify({ message: "Language code already exists" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
