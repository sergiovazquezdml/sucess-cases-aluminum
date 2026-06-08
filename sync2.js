const fs = require('fs');
const dataJs = fs.readFileSync('data.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// Get casesData block from dataJs
const matchData = dataJs.match(/const casesData = \{[\s\S]*?\};\r?\n\/\* end casesData \*\//);

if (matchData) {
  // Strip the '/* end casesData */' part for injection into index.html if needed, 
  // or just replace the block in index.html exactly.
  // In index.html, casesData ends before const casesRegistry
  const newHtml = indexHtml.replace(/const casesData = \{[\s\S]*?\};\r?\n\r?\nconst casesRegistry = \[/, matchData[0] + '\n\nconst casesRegistry = [');
  
  fs.writeFileSync('index.html', newHtml, 'utf8');
  console.log('index.html synced successfully');
}
