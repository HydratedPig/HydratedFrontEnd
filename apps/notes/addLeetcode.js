const readline = require('node:readline');
const url = require('node:url');
const fs = require('node:fs');
const path = require('node:path');
const { leetcode } = require('./leetcode');
const { writeHeaders } = require('./utils');
const { LEETCODE_CN_PROBLEMS_LINK, LEETCODE_PATH } = require('./constants');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hyphenArr(arr) {
  return (arr || []).join('-');
}

function getFileName(fileArr) {
  return hyphenArr(fileArr) + '.md';
}

function getLeetcodeLink(titleArr) {
  return url.resolve(
    LEETCODE_CN_PROBLEMS_LINK,
    hyphenArr(titleArr).toLowerCase()
  );
}

function getTargetFolder(idx) {
  const minimum = Math.floor(idx / 100);
  const maximum = (minimum + 1) * 100;
  return path.resolve(LEETCODE_PATH, hyphenArr([minimum * 100 + 1, maximum]));
}

function judgeAndCreateFolder(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

function writeCodeBlock(stream, lang) {
  stream.write(`\n\`\`\`${lang}\n\n\`\`\`\n`);
}

function main() {
  console.log('请输入 Leetcode 标题，如： 1. Two Sum ');
  rl.on('line', (line) => {
    const title = line.split(' ');
    const idx = Number(title.shift().replace('.', ''));
    if (Number.isNaN(idx)) {
      console.log('你这标题不对劲啊，序号呢？！！！');
      return;
    }
    const mdName = getFileName([idx, ...title.map((t) => t.toLowerCase())]);
    const leetcodeLink = getLeetcodeLink(title);
    const folderPath = getTargetFolder(idx);
    judgeAndCreateFolder(folderPath);
    const folderStream = fs.createWriteStream(path.resolve(folderPath, mdName));
    writeHeaders(folderStream, line, { firstLine: true });
    writeHeaders(folderStream, `[Leetcode](${leetcodeLink})`, 2);
    writeHeaders(folderStream, 'Description', 2);
    writeHeaders(folderStream, '思路', 2);
    writeHeaders(folderStream, 'TypeScript', 2);
    writeCodeBlock(folderStream, 'ts');
    writeHeaders(folderStream, 'C++', 2);
    writeCodeBlock(folderStream, 'c++');
    folderStream.end('');
    folderStream.on('close', leetcode);
    // leetcode();
    rl.close();
  });
}

main();
