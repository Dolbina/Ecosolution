import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import FiraSansRegular from '../assets/fonts/FiraSans-Regular.ttf';
import FiraSansThin from '../assets/fonts/FiraSans-Thin.ttf';
import OswaldBold from '../assets/fonts/Oswald-Bold.ttf';
import OswaldRegular from '../assets/fonts/Oswald-Regular.ttf';


export const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'FiraSansRegular';
        src: local('FiraSansRegular'),
        url(${FiraSansRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
  @font-face {
        font-family: 'FiraSansThin';
        src: local('FiraSansThin'),
        url(${FiraSansThin}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

     @font-face {
        font-family: 'OswaldBold';
        src: local('OswaldBold'),
        url(${OswaldBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

     @font-face {
        font-family: 'OswaldRegular';
        src: local('OswaldRegular'),
        url(${OswaldRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

html {
  box-sizing: border-box;
  
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;

  font-family: -apple-system, BlinkMacSystemFont, 'OswaldRegular','Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
   
  color: rgba(18, 20, 23, 0.50);
   font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

p {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1, h2, h3{
  margin: 0;
}

 a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;
