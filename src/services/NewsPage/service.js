"use client";

import client from "../client";

export const homeEditData = async (data, lang) => {
  try {
    await client.put(`/pages/${lang}/insight`, data);
    console.log(`Data saved successfully for language: ${lang}`);
  } catch (error) {
    console.error(`Error saving data for language ${lang}:`, error);
  }
};

export const homeGetData = async (lang) => {
  try {
    const result = await client.get(`/pages/${lang}/insight`);
    console.log(`Data fetched successfully for language: ${lang}`);
    return result.data;
  } catch (error) {
    console.error(`Error fetching data for language ${lang}:`, error);
  }
};
export const articleGetData = async () => {
  try {
    const result = await client.get(`/insight-articles`);
    console.log(`Data fetched successfully for language: `);
    console.log("res", result);
    return result;
  } catch (error) {
    console.error(`Error fetching data for language :`, error);
  }
};
export const articleEditData = async (data) => {
  try {
    await client.put(`/insight-articles`, data);
    console.log(`Data saved successfully for language: `);
  } catch (error) {
    console.error(`Error saving data for language :`, error);
  }
};
