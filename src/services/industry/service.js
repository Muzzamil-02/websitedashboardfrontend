"use client";

import client from "../client";

export const homeEditData = async (data, lang, pgname) => {
  try {
    await client.put(`/pages/${lang}/${pgname}`, data);
    console.log(`Data saved successfully for language: ${lang}`);
  } catch (error) {
    console.error(`Error saving data for language ${lang}:`, error);
  }
};

export const homeGetData = async (lang, pgname) => {
  try {
    const result = await client.get(`/pages/${lang}/${pgname}`);
    console.log(`Data fetched successfully for language: ${lang}`);
    return result.data;
  } catch (error) {
    console.error(`Error fetching data for language ${lang}:`, error);
  }
};
