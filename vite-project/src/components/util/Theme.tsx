import { defineStyle } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        themeGreen: { 500: "#126F54" },
        themeRed: { 500: "#E34140" },
        themeWhite: { 500: "#FFFAF4" },
        themeLightGreen: { 500: "#C1D8B5" },
        themePink: { 500: "#FFE0DD" },
        themeFontGreen: { 500: "#0E3E30" },
    },
});

export { theme };
