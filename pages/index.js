import format from "date-fns/format";

import { makeEntries } from "../server/entires";

export default function Index({ entries }) {
  return (
    <main>
      {entries.map(({ html, timestamp, slug }) => (
        <div className="entry" key={slug} id={slug}>
          <a className="date" href={"#" + slug}>
            {format(new Date(timestamp), "MMM dd yyyy").toUpperCase()}
          </a>
          <div
            className="entry-text"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const entries = await makeEntries();
  return {
    props: { entries },
  };
}
