// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Basic Meta Tags */}
          <title>Eli Benveniste | Data Analyst & Developer</title>
          <meta name="description" content="Welcome to Eli Benveniste's professional portfolio. Data Analyst & Developer with expertise in data visualization, web development, and software engineering." />

          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.yourwebsite.com/" />
          <meta property="og:title" content="Eli Benveniste | Data Analyst & Developer" />
          <meta property="og:description" content="Welcome to Eli Benveniste's professional portfolio. Data Analyst & Developer with expertise in data visualization, web development, and software engineering." />
          <meta property="og:image" content="https://www.yourwebsite.com/images/Headshot.png" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.yourwebsite.com/" />
          <meta name="twitter:title" content="Eli Benveniste | Data Analyst & Developer" />
          <meta name="twitter:description" content="Welcome to Eli Benveniste's professional portfolio. Data Analyst & Developer with expertise in data visualization, web development, and software engineering." />
          <meta name="twitter:image" content="https://www.yourwebsite.com/images/Headshot.png" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
