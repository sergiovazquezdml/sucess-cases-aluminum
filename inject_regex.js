const fs = require('fs');

let haiData = fs.readFileSync('hai_data.txt', 'utf8');

// Clean up haiData
haiData = haiData.replace(/10" Presezzi/g, '10-inch Presezzi');
haiData = haiData.replace(/Presezzi 10"/g, 'Presezzi 10-inch');
haiData = haiData.replace(/Chisineu-Criș/g, 'Chisineu-Cris');

let dataJs = fs.readFileSync('data.js', 'utf8');
dataJs = dataJs.replace(/};\s*\/\*\s*end casesData\s*\*\//g, '},\n' + haiData + '\n};\n/* end casesData */');
fs.writeFileSync('data.js', dataJs, 'utf8');

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/};\s*\/\*\s*end casesData\s*\*\//g, '},\n' + haiData + '\n  };\n  /* end casesData */');
fs.writeFileSync('index.html', indexHtml, 'utf8');

console.log('Injected cleanly.');
