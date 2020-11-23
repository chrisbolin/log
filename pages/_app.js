import Head from "next/head";

import "./styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Log - Chris Bolin</title>
        <style>
          {`@font-face {
            font-family: "Source Code Pro Regular";
            src: url("/log/SourceCodePro-Regular.ttf");
          }`}
        </style>
        <link rel="icon" href="/log/favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
