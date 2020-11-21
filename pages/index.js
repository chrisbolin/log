import format from "date-fns/format";
import Head from "next/head";

import { makeEntries } from "../server/entires";

export default function Index({ entries }) {
  return (
    <div>
      <Head>
        <title>Log - Chris Bolin</title>
      </Head>
      {entries.map(({ html, date }, idx) => (
        <div key={idx}>
          <div>{format(new Date(date), "MMMM d, yyyy")}</div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const entries = await makeEntries();
  return {
    props: { entries },
  };
}
