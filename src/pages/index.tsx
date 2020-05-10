import React from 'react';
import { createGlobalStyle } from 'styled-components';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import cv from '../store/cv';

const fontFace = (
    name: string,
    src: string,
    fontWeight: string | number = 'normal',
    fontStyle = 'normal'
) => {
    return `
      @font-face{
          font-family: "${name}";
          src: url(${require('../assets/fonts/' + src + '.eot')});
          src: url(${require('../assets/fonts/' +
              src +
              '.eot')}?#iefix) format("embedded-opentype"),
               url(${require('../assets/fonts/' +
                   src +
                   '.woff')}) format("woff"),
               url(${require('../assets/fonts/' +
                   src +
                   '.ttf')}) format("truetype"),
               url(${require('../assets/fonts/' +
                   src +
                   '.svg')}#${name}) format("svg");
          font-display: swap;
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
};

const GlobalStyle = createGlobalStyle`
    ${fontFace('Oswald', 'oswald-v16-latin-300', 300)}
    ${fontFace('Oswald', 'oswald-v16-latin-regular', 400)}

    :root {
      --primary: #D42845;
      --black: #040404;
      --gray: #6B6B6B;
      --light-gray: #F0F0F0;
      --white: #FFFFFF;
    }

    * {
      box-sizing: border-box;
      font-family: 'Oswald', sans-serif;
    }

    body {
      background: var(--black);
    }

    body, h1, h2, h3, h4, h5, p {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    h2 {
      text-transform: uppercase;
      font-size: 2.25rem;
      font-weight: 400;
      color: var(--black);
    }

    h3 {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 400;
      color: var(--black);
    }

    p {
      font-weight: 300;
      font-size: 1rem;
      color: var(--gray);
      margin-top: .5rem;
    }

    section {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      background: var(--white);
    }
`;

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <div className="App">
            <Hero />
            <Contact />
            <About />
            <Resume cv={cv} />
            <Footer />
        </div>
    </>
);

export default App;
