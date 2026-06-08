const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Match hydro block
const hydroBlock = content.match(/\{\s*id:\s*"hydro-cressona"[\s\S]*?isCurrent:\s*false\s*\}/)[0];

// Match hai block
const haiBlock = content.match(/\{\s*id:\s*"hai"[\s\S]*?isCurrent:\s*true\s*\}/)[0];

// In the original file, it's hydroBlock + ',' + whitespace + haiBlock.
// We will replace that entire chunk with haiBlock + ',' + whitespace + hydroBlock.

const targetRegex = new RegExp(
  hydroBlock.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") +
  '\\s*,\\s*' +
  haiBlock.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
);

const newChunk = haiBlock + ',\n  ' + hydroBlock;

if (targetRegex.test(content)) {
  content = content.replace(targetRegex, newChunk);
  fs.writeFileSync('index.html', content, 'utf8');
  console.log('Swapped successfully!');
} else {
  console.log('Could not match target chunk!');
}

