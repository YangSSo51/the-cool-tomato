import { defineStyle } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'GmkBold';
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/GmarketSansTTFBold.ttf");
      }

      @font-face {
        font-family: 'GmkMedium';
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/GmarketSansTTFMedium.ttf");
      }

      @font-face {
        font-family: 'GmkLight';
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/GmarketSansTTFLight.ttf");
      }

      @font-face {
        font-family: 'FooterLight';
        font-weight: 100;
        font-display: swap;
        src: url("/fonts/GmarketSansTTFMedium.ttf");
      }
    `}
    />
);

const theme = extendTheme({
    colors: {
        themeGreen: { 500: "#126F54" },
        themeRed: { 500: "#E34140" },
        themeWhite: { 500: "#FFFAF4" },
        themeLightGreen: { 500: "#C1D8B5" },
        themePink: { 500: "#FFE0DD" },
        themeFontGreen: { 500: "#0E3E30" },
    },
    styles: {
        global: {
            body: {
                fontFamily: "GmkMedium",
            },
            footer: {
                fontFamily: "FooterLight",
            },
            html: {
                fontFamily: "GmkLight",
            },
        },
    },
});

export { theme, Fonts };
