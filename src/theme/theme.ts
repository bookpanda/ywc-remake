import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import "@fontsource/inter";

export const theme = extendTheme(
    {
        colors: {
            primary: { 300: "#fad4b9", 500: "#FF7009", 700: "#C95806" },
            secondary: { 500: "#E62727" },
            tertiary: {
                500: "#F5F5F5",
                600: "#EBE7E7",
                700: "#847D7D",
                900: "#473D3D",
            },
        },
        fonts: {
            heading: `'Inter', sans-serif`,
            body: `'Inter', sans-serif`,
        },
    },
    withDefaultColorScheme({
        colorScheme: "primary",
        components: ["Button", "Badge", "Progress"],
    })
);
