"use client";

import client from "../client";

export const homeEditData = async (data, lang) => {
  try {
    await client.put(`/articles-detail`, data);
    console.log(`Data saved successfully for language: ${lang}`);
  } catch (error) {
    console.error(`Error saving data for language ${lang}:`, error);
  }
};

export const homeGetData = async (id) => {
  try {
    const result = await client.get(`/articles-detail/${id}`);
    console.log(`Data fetched successfully for language: `);
    return result.data;
  } catch (error) {
    console.error(`Error fetching data for language `, error);
  }
};
