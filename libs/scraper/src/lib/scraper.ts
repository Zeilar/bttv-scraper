import fetch from "node-fetch";

interface ResponseEmote {
	emote: {
		id: string;
		code: string;
		imageType: string;
	};
}

interface Emote {
	id: string;
	name: string;
	format: string;
}

async function fetchEmotes(page: number) {
	try {
		const response = await fetch(`https://api.betterttv.net/3/emotes/shared/top?offset=${50 * page}&limit=50`); // Limit max is 100
		const emotes = (await response.json()) as ResponseEmote[];
		return emotes.map(element => ({
			id: element.emote.id,
			name: element.emote.code,
			format: element.emote.imageType,
		}));
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function scrape() {
	const finalEmotes: Emote[] = [];
	let hasMoreData = true;
	let page = 0;
	while (hasMoreData) {
		const emotes = await fetchEmotes(page);
		if (!(Array.isArray(emotes) && emotes.length > 0)) {
			hasMoreData = false;
			break;
		}
		finalEmotes.push(...emotes);
		page++;
	}
	return Buffer.from(JSON.stringify(finalEmotes));
}
