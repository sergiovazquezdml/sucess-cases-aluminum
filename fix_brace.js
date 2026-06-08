const fs = require('fs');
function fixBrace(file) {
  let content = fs.readFileSync(file, 'utf8');
  // I mistakenly added a }, before 'hai': {
  // It looks like:
  // },
  //   'hai': {
  content = content.replace(/},\r?\n\s*'hai': {/g, ',\n  \'hai\': {');
  fs.writeFileSync(file, content, 'utf8');
}
fixBrace('data.js');
fixBrace('index.html');
console.log('Fixed closing brace.');
