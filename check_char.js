const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
const match = content.match(/less lubricant (.*?) 98,865/);
if (match) {
  for (let i=0; i<match[1].length; i++) {
    console.log(match[1].charCodeAt(i));
  }
}
