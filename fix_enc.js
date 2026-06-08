const fs = require('fs');

function fixEncoding(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/55% less lubricant  98,865 lb/g, '55% less lubricant - 98,865 lb');
  content = content.replace(/Yes \?\" progressive/g, 'Yes - progressive');
  content = content.replace(/5 presses  Romania  Flagship/g, '5 presses - Romania - Flagship');
  content = content.replace(/Success Cases  The Uncommon/g, 'Success Cases - The Uncommon');
  fs.writeFileSync(file, content, 'utf8');
}

fixEncoding('data.js');
fixEncoding('index.html');
console.log('Encoding fixed.');
