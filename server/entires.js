const path = require("path");
const fs = require("fs").promises;
const marked = require("marked");

function getDate(filename) {
  const [year, month, day] = filename.split(".")[0].split("-");
  return `${year}-${month}-${day}T12:00:00.000Z`;
}

async function mapArrayAsync(array, callback) {
  const resultingArray = [];
  for (let index = 0; index < array.length; index++) {
    resultingArray.push(await callback(array[index], index, array));
  }
  return resultingArray;
}

export async function makeEntries() {
  const entriesDir = path.join(process.cwd(), "entries");
  const filepaths = (await fs.readdir(entriesDir)).sort().reverse();
  const entries = await mapArrayAsync(filepaths, (filepath) =>
    makeEntry(filepath, entriesDir)
  );
  return entries;
}

export async function makeEntry(filename, directory) {
  const filepath = path.join(directory, filename);
  const raw = await fs.readFile(filepath, { encoding: "utf-8" });
  const html = marked(raw);
  const date = getDate(filename);
  return {
    html,
    date,
  };
}
