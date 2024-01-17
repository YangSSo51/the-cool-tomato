import { Global } from '@emotion/react';

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
    `}
  />
);

export default Fonts;
