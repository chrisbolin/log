const path = require("path");
const fs = require("fs").promises;
const marked = require("marked");
const format = require("date-fns/format");

function getDate(filename) {
  const [year, month, day] = filename.split(".")[0].split("-");
  return `${year}-${month}-${day}T12:00:00.000Z`;
}

async function mapArrayAsync(array, callback) {
  const resultingArray = [];
  for (let index = 0; index < array.length; index++) {
    resultingArray.push(...(await callback(array[index], index, array)));
  }
  return resultingArray;
}

async function processFile(filename, directory) {
  const filepath = path.join(directory, filename);
  const raw = await fs.readFile(filepath, { encoding: "utf-8" });
  const allHtml = marked(raw);
  const timestamp = getDate(filename);

  return allHtml.split("<hr>").map((html, index) => ({
    html,
    timestamp,
    slug: makeSlug(timestamp, index),
  }));
}

function makeSlug(timestamp, index) {
  const suffix = index === 0 ? "" : `-${String.fromCharCode(65 + index)}`;
  return format(new Date(timestamp), `yyyy-MM-dd`) + suffix;
}

export async function makeEntries() {
  const entriesDir = path.join(process.cwd(), "entries");
  const filepaths = (await fs.readdir(entriesDir)).sort().reverse();
  const entries = await mapArrayAsync(filepaths, (filepath) =>
    processFile(filepath, entriesDir)
  );
  return entries;
}
