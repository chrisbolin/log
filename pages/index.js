import format from "date-fns/format";

import { makeEntries } from "../server/entires";

function Entry({ html, timestamp, slug }) {
  return (
    <div className="entry" key={slug} id={slug}>
      <a className="date" href={"#" + slug}>
        {format(new Date(timestamp), "MMM dd yyyy").toUpperCase()}
      </a>
      <div
        className="entry-text"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}

export default function Index({ entries }) {
  return (
    <>
      <header>
        <div>
          <a href="/">chris.bolin.co</a> / log
        </div>
      </header>
      <main>
        {entries.map((entry) => (
          <Entry key={entry.slug} {...entry} />
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
