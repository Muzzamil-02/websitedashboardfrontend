"use client";

import client from "@/services/client";

export const homeEditData = async (data) => {
  try {
    await client.put("/pages/en/home", data);
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
