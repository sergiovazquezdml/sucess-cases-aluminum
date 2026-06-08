const fs = require('fs');

function fixEncoding(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\uFFFD/g, '-');
  fs.writeFileSync(file, content, 'utf8');
}

fixEncoding('data.js');
fixEncoding('index.html');
console.log('Encoding fixed via uFFFD.');
