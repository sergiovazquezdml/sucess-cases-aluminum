const fs = require('fs');
let dataJs = fs.readFileSync('data.js', 'utf8');
let haiData = fs.readFileSync('hai_data.txt', 'utf8');

// Clean up haiData
haiData = haiData.replace(/10" Presezzi/g, '10-inch Presezzi');
haiData = haiData.replace(/Presezzi 10"/g, 'Presezzi 10-inch');
haiData = haiData.replace(/Chisineu-Criș/g, 'Chisineu-Cris');

// Inject haiData at the end of casesData object
dataJs = dataJs.replace('};\n/* end casesData */', '},\n' + haiData + '\n};\n/* end casesData */');
dataJs = dataJs.replace('};\r\n/* end casesData */', '},\r\n' + haiData + '\r\n};\r\n/* end casesData */');

fs.writeFileSync('data.js', dataJs, 'utf8');

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace('};\n  /* end casesData */', '},\n' + haiData + '\n  };\n  /* end casesData */');
indexHtml = indexHtml.replace('};\r\n  /* end casesData */', '},\r\n' + haiData + '\r\n  };\r\n  /* end casesData */');
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Injected safely.');
