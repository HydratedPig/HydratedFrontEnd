const fs = require('node:fs');
const path = require('node:path');
const { writeHeaders } = require('./utils');
const { LEETCODE_PATH, WEEKLY_PATH } = require('./constants');

const README_FILENAME = 'README.md';

const WEEKLY_FILENAME = 'weekly';

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

function capitalizeFirstChar(name) {
  return name.replace(/^(.)(.*)/, (match, $1, $2) => {
    return $1.toUpperCase() + $2;
  });
}

function getFileLink(subjectName, filepath) {
  return `[${subjectName}](${filepath})`;
}
// leetcode related
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

function handleWriteAllReadme() {
  const leetcodeFolder = listFolders(LEETCODE_PATH);
  const readmeStream = fs.createWriteStream(
    path.resolve(LEETCODE_PATH, README_FILENAME)
  );

  const weeklyLink = getFileLink(
    WEEKLY_FILENAME.toUpperCase(),
    '../weekly/README.md'
  );
  writeHeaders(readmeStream, weeklyLink, { firstLine: true });

  writeHeaders(readmeStream, '所有 leetcode 题解');
  for (const i of leetcodeFolder) {
    writeHeaders(readmeStream, i, 2);
    handleLeetcodeMd(readmeStream, i);
  }

  readmeStream.end('');
}
// weekly related
function handleWeeklyMd(stream, foldername) {
  const files = listFiles(path.resolve(WEEKLY_PATH, foldername));
  for (const i of files) {
    const week = i.replace(/\.md$/, '');
    const leetcodeLink = getFileLink(`Week ${week}`, `./${foldername}/${i}`);
    writeHeaders(stream, leetcodeLink, 3);
  }
}
function handleWriteWeeklyReadme() {
  const weeklyFolder = listFolders(WEEKLY_PATH);
  const readmeStream = fs.createWriteStream(
    path.resolve(WEEKLY_PATH, README_FILENAME)
  );

  writeHeaders(readmeStream, 'WEEKLY', { firstLine: true });
  for (const i of weeklyFolder) {
    writeHeaders(readmeStream, i, 2);
    handleWeeklyMd(readmeStream, i);
  }
}

function main() {
  handleWriteAllReadme();
  handleWriteWeeklyReadme();
}

module.exports = {
  leetcode: main,
};
