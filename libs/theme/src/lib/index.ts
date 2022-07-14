import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	config: { initialColorMode: "dark", useSystemColorMode: false },
	styles: {
		global: {
			body: {
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			},
		},
	},
	fonts: {
		heading: "Inter, sans-serif",
		body: "Inter, sans-serif",
	},
});
