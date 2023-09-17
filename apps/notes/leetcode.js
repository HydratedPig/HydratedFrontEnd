const fs = require('node:fs');
const path = require('node:path');

const LEETCODE_PATH = path.resolve(__dirname, './docs/leetcode/all');
const README_FILENAME = 'README.md';

function listDir(path) {
  const files = fs.readdirSync(path, { withFileTypes: true });
  return files;
}

function listFolders(path) {
  const list = listDir(path);
  return list.filter((f) => f.isDirectory()).map((f) => f.name);
}

function listFiles(path) {
  const list = listDir(path);
  return list
    .filter((f) => f.isFile() && f.name !== README_FILENAME)
    .map((f) => f.name);
}

function writeHeaders(stream, str, opt) {
  let firstLine = false;
  let level = 1;
  if (typeof opt === 'object') {
    firstLine = opt.firstLine;
    level = opt.level;
  } else {
    level = opt;
  }
  const levelSharps = Array(level).fill('#').join('');
  !firstLine && stream.write('\n');
  stream.write(`${levelSharps} ${str}\n`);
}

function capitalizeFirstChar(name) {
  return name.replace(/^(.)(.*)/, (match, $1, $2) => {
    return $1.toUpperCase() + $2;
  });
}

function getFileLink(subjectName, filepath) {
  return `[${subjectName}](${filepath})`;
}

function handleLeetcodeMd(stream, foldername) {
  const files = listFiles(path.resolve(LEETCODE_PATH, foldername));
  const traverse = (filename) => {
    const truncatedFilename = filename.replace(/\.md$/, '');
    const filenameArr = truncatedFilename.split(/[_-]/);
    const idx = filenameArr.splice(0, 1)?.[0];
    const titledFilename = filenameArr.map(capitalizeFirstChar);
    return { subjectName: `${idx}. ${titledFilename.join(' ')}`, filename };
  };
  const targetFilename = files.map(traverse);
  const folderStream = fs.createWriteStream(
    path.resolve(LEETCODE_PATH, foldername, README_FILENAME)
  );
  writeHeaders(folderStream, foldername, { firstLine: true });
  for (let i of targetFilename) {
    const folderLink = getFileLink(i.subjectName, `./${i.filename}`);
    writeHeaders(folderStream, folderLink, 2);
    const leetcodeLink = getFileLink(
      i.subjectName,
      `./${foldername}/${i.filename}`
    );
    writeHeaders(stream, leetcodeLink, 3);
  }
  folderStream.end('');
}

function main() {
  const leetcodeFolder = listFolders(LEETCODE_PATH);
  const README = fs.createWriteStream(
    path.resolve(LEETCODE_PATH, README_FILENAME)
  );

  writeHeaders(README, '所有 leetcode 题解', { firstLine: true });
  for (const i of leetcodeFolder) {
    writeHeaders(README, i, 2);
    handleLeetcodeMd(README, i);
  }
  README.end('');
}

main();
