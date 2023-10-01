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

module.exports = {
  writeHeaders,
};
