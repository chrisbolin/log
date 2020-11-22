import format from "date-fns/format";
import Head from "next/head";

import { makeEntries } from "../server/entires";

export default function Index({ entries }) {
  return (
    <>
      <Head>
        <title>Log - Chris Bolin</title>
        <style>
          {`@font-face {
            font-family: "Source Code Pro Light";
            src: url("log/SourceCodePro-Light.ttf");
          }`}
        </style>
      </Head>
      <main>
        {entries.map(({ html, date }, idx) => (
          <div className="entry" key={idx}>
            <div className="date">
              {format(new Date(date), "MMM dd yyyy").toUpperCase()}
            </div>
            <div className="text">
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <hr />
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const entries = await makeEntries();
  return {
    props: { entries },
  };
}
