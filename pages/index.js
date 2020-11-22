import format from "date-fns/format";

import { makeEntries } from "../server/entires";

export default function Index({ entries }) {
  return (
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
  );
}

export async function getStaticProps() {
  const entries = await makeEntries();
  return {
    props: { entries },
  };
}
