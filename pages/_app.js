import Head from "next/head";

import "./styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>
          {/* unfortunately this has to be here for fucking multiple NextJS reasons
            and I don't even want to get into it right now */}
          {`@font-face {
            font-family: "Source Code Pro Regular";
            src: url("/log/SourceCodePro-Regular.ttf");
          }`}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
