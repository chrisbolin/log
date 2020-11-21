import format from "date-fns/format";
import Head from "next/head";

import { makeEntries } from "../server/entires";

export default function Index({ entries }) {
  return (
    <>
      <Head>
        <title>Log - Chris Bolin</title>
      </Head>
      <main>
        {entries.map(({ html, date }, idx) => (
          <div className="entry" key={idx}>
            <div className="date">{format(new Date(date), "MMMM d, yyyy")}</div>
            <div className="text" dangerouslySetInnerHTML={{ __html: html }} />
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
