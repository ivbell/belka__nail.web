import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inspiration&display=swap'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
