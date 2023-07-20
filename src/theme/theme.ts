import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

export const theme = extendTheme({
    colors: {
        orange: "#FF7009",
        red: "#E62727",
        white: "#FFFFFF",
        black: "#000000",
        lightgray: "#F5F5F5",
        gray: "#847D7D",
    },
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
});
