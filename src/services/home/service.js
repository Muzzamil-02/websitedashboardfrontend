"use client";

import client from "../client";

export const homeEditData = async (data) => {
  try {
    await client.put("/pages/en/home", data);
    console.log("Data saved successfully");
  } catch (error) {
    console.log("data", data);
    console.error("Error saving data:", error);
  }
};

export const homeGetData = async () => {
  try {
    const result = await client.get("/pages/en/home");
    console.log("Data saved successfully");
    return result.data;
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
