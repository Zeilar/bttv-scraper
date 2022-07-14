import { DownloadIcon } from "@chakra-ui/icons";
import { Button, Flex, Img, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import bttvImage from "../../assets/images/bttv.png";
import { saveAs } from "file-saver";

interface Response {
	data: {
		data: ArrayBufferLike;
		type: "buffer";
	};
}

export default function Home() {
	const toast = useToast({ position: "top" });
	const [isDownloading, setIsDownloading] = useState(false);

	async function scrape() {
		if (isDownloading) {
			toast({
				status: "error",
				title: "Error",
				description: "Scrape is already in progress, please wait or reload the page.",
			});
			return;
		}
		try {
			setIsDownloading(true);
			const response = await fetch(`${process.env["NX_API_URL"]}/scrape`, { method: "POST" });
			const { data }: Response = await response.json();
			saveAs(new Blob([new Uint8Array(data.data)]), "emotes.json");
		} catch (error) {
			console.error(error);
			toast({ title: "Error", status: "error", description: "Failed scraping emotes." });
		} finally {
			setIsDownloading(false);
		}
	}

	return (
		<Flex flexDir="column" justifyContent="center" alignItems="center">
			<Img src={bttvImage} maxW="100%" objectFit="contain" filter="drop-shadow(black 0px 1px 1px)" />
			<Text as="h1" fontSize="5xl" fontWeight={600} mt={-6}>
				BTTV Emote Scraper
			</Text>
			<Button
				fontSize="2xl"
				size="lg"
				mt={8}
				p={8}
				bgColor="purple.600"
				leftIcon={<DownloadIcon />}
				isLoading={isDownloading}
				onClick={scrape}
				_hover={{ bgColor: "purple.500" }}
				_active={{ bgColor: "purple.700" }}
				_disabled={{ pointerEvents: "none", cursor: "not-allowed", opacity: 0.25 }}
			>
				Download
			</Button>
		</Flex>
	);
}
