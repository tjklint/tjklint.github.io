import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono';
    src: url('../../fonts/RobotoMono/RobotoMono-Medium.ttf') format('truetype');
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'RobotoMono';
    src: url('../../fonts/RobotoMono/RobotoMono-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../../fonts/Inter/Inter-Regular.ttf') format('truetype');
    font-weight: 400;
  }
`;

export default GlobalStyles;
