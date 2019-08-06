import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open-sans', sans-serif;
        font-size: 16px;
        letter-spacing: -0.025em;
    }
`;

export default GlobalStyles;
