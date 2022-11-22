import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="./images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Modern PWA Website" />
        <link rel="apple-touch-icon" href="./public/icon/icon-512x512.png" />
        <link rel="manifest" href="./manifest.json" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  );
}
