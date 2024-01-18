import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import colors from "./colors";

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
        font-weight: 200;
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

const { primary, utility } = colors;
const Theme = extendTheme({
    colors: {
        themeGreen: { 500: primary.ourgreen },
        themeRed: { 500: primary.ourred },
        themeWhite: { 500: primary.ourwhite },
        themeLightGreen: { 500: primary.ourlightgreen },
        themePink: { 500: primary.ourpink },
        themeFontGreen: { 500: utility.greenfont },
    },
    styles: {
        global: {
            body: {
                fontFamily: "GmkLight",
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

export { Theme, Fonts };
