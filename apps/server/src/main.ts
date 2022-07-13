import { scrape } from "@scraper";
import express from "express";

const { PORT } = process.env;

const app = express();

app.post("/scrape", async (_req, res) => {
	res.json({ data: await scrape() });
});

app.listen(PORT);
