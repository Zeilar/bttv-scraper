import { scrape } from "@scraper";
import express from "express";

const { PORT } = process.env;

const app = express();

app.get("*", (_req, res) => {
	res.send("BTTV Scraper API");
});

app.post("/scrape", async (_req, res) => {
	res.json({ data: await scrape() });
});

app.listen(PORT);
