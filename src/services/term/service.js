"use client";

import client from "../client";

export const homeEditData = async (data, lang) => {
  try {
    await client.put(`/pages/${lang}/term`, data);
    console.log(`Data saved successfully for language: ${lang}`);
    return true;
  } catch (error) {
    console.log(`Error saving data for language ${lang}:`, error);
  }
};

export const homeGetData = async (lang) => {
  try {
    const result = await client.get(`/pages/${lang}/term`);
    console.log(`Data fetched successfully for language: ${lang}`);
    return result.data;
  } catch (error) {
    console.error(`Error fetching data for language ${lang}:`, error);
  }
};
