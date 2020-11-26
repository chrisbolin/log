import Head from "next/head";

import "./styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Log - Chris Bolin</title>
        <link rel="icon" href="/log/favicon.ico"></link>
        <style>
          {/* unfortunately this has to be here for fucking multiple NextJS reasons
            and I don't even want to get into it right now */}
          {`@font-face {
            font-family: "Open Sans Regular";
            src: url("/log/OpenSans-Regular.ttf");
          }`}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
