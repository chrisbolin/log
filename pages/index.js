import format from "date-fns/format";

import { makeEntries } from "../server/entires";

export default function Index({ entries }) {
  return (
    <main>
      {entries.map(({ html, timestamp, slug }) => (
        <div className="entry" key={slug} id={slug}>
          <a href={"#" + slug}>
            <div className="date">
              {format(new Date(timestamp), "MMM dd yyyy").toUpperCase()}
            </div>
          </a>
          <div className="text">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <hr />
          </div>
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
