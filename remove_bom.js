const fs = require('fs');
let dataJs = fs.readFileSync('data.js', 'utf8');
dataJs = dataJs.replace(/^\uFEFF/gm, ''); // Remove BOM globally
dataJs = dataJs.replace(/\uFEFF/g, ''); // Remove BOM everywhere
fs.writeFileSync('data.js', dataJs, 'utf8');

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/^\uFEFF/gm, '');
indexHtml = indexHtml.replace(/\uFEFF/g, '');
fs.writeFileSync('index.html', indexHtml, 'utf8');

console.log('BOM removed.');
