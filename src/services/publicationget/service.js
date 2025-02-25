"use client";

import client from "../client";
export const publicationGetData = async () => {
  try {
    const result = await client.get(`/publications`);
    console.log(`Data fetched successfully for language: `);
    return result;
  } catch (error) {
    console.error(`Error fetching data for language :`, error);
  }
};
export const contactGetData = async () => {
  try {
    const result = await client.get(`/contact`);
    console.log(`Data fetched successfully for language: `);
    return result;
  } catch (error) {
    console.error(`Error fetching data for language :`, error);
  }
};
