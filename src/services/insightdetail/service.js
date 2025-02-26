"use client";

import client from "../client";

export const homeEditData = async (data) => {
  try {
    await client.post(`/articles-detail`, [data]);
    console.log(`Data saved successfully: `, [data]);
  } catch (error) {
    console.log(`Error saving data Article Details:`, error);
  }
};

export const homeGetData = async (id) => {
  try {
    const result = await client.get(`/articles-detail/${id}`);
    console.log(`Data fetched successfully: `, result);
    return result;
  } catch (error) {
    console.log(`Error fetching data for language `, error);
  }
};
