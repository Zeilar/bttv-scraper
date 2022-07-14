import { scrape } from "@scraper";
import express from "express";
import cors from "cors";

const { PORT, UI_ORIGIN } = process.env;
const app = express();

app.use(cors({ origin: [UI_ORIGIN] }));

app.get("*", (_req, res) => {
	res.send("BTTV Scraper API");
});

app.post("/scrape", async (_req, res) => {
	res.json({ data: await scrape() });
});

app.listen(PORT);
