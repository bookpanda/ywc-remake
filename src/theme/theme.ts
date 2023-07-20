import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import "@fontsource/inter";

export const theme = extendTheme(
    {
        colors: {
            primary: { 500: "#FF7009" },
            secondary: { 500: "#E62727" },
        },
        fonts: {
            heading: `'Inter', sans-serif`,
            body: `'Inter', sans-serif`,
        },
        styles: {
            global: {
                button: {
                    _hover: {
                        backgroundColor: "#C95806",
                    },
                },
            },
        },
    },
    withDefaultColorScheme({
        colorScheme: "primary",
        components: ["Button", "Badge"],
    })
);
