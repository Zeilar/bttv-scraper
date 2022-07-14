import "./fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@theme";
import { createRoot } from "react-dom/client";
import Home from "./app/pages/Home";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
	<ChakraProvider theme={theme}>
		<Home />
	</ChakraProvider>
);
