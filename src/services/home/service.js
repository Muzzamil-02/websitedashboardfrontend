"use client";

import toast from "react-hot-toast";
import client from "../client";

export const homeEditData = async (data, lang) => {
  try {
    await client.put(`/pages/${lang}/home`, data);
    console.log(`Data saved successfully for language: ${lang}`);
    return true;
  } catch (error) {
    toast.error(error);
    console.log(`Error saving data for language ${lang}:`, error);
  }
};

export const homeGetData = async (lang) => {
  try {
    const result = await client.get(`/pages/${lang}/home`);
    console.log(`Data fetched successfully for language: ${lang}`);
    return result.data;
  } catch (error) {
    toast.error(error);
    console.log(`Error fetching data for language ${lang}:`, error);
  }
};
