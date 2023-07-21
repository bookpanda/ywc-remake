import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import "@fontsource/inter";

export const theme = extendTheme(
    {
        colors: {
            primary: { 300: "#fad4b9", 500: "#FF7009" },
            secondary: { 500: "#E62727" },
            tertiary: { 500: "#F5F5F5", 700: "#847D7D" },
        },
        fonts: {
            heading: `'Inter', sans-serif`,
            body: `'Inter', sans-serif`,
        },
        styles: {
            global: {
                Button: {
                    _hover: {
                        backgroundColor: "#C95806",
                    },
                },
            },
        },
    },
    withDefaultColorScheme({
        colorScheme: "primary",
        components: ["Button", "Badge", "Progress"],
    })
);
