import { NewsResponse } from "@/models/NewsArticles";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();

  if (!searchQuery) {
    return res.status(400).json({ error: "Please provide a search query" });
  }

  const response =
    await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=188aa46717204c37b6e8890b5b217544
  `);
  const newsResponse: NewsResponse = await response.json();

  res.status(200).json(newsResponse.articles);
  
}
