const fs = require('fs');

const dataJs = fs.readFileSync('data.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract casesData block from data.js
const matchData = dataJs.match(/const casesData = \{[\s\S]*?\};\r?\n\/\* end casesData \*\//);
if (matchData) {
  let newHtml = indexHtml.replace(/const casesData = \{[\s\S]*?\};\r?\n\s*\/\* end casesData \*\//, matchData[0]);
  
  // Extract casesRegistry block from data.js
  const matchRegistry = dataJs.match(/const casesRegistry = \[[\s\S]*?\];/);
  if (matchRegistry) {
    newHtml = newHtml.replace(/const casesRegistry = \[[\s\S]*?\];/, matchRegistry[0]);
  }

  // Extract homeContent block from data.js
  const matchHomeContent = dataJs.match(/const homeContent = \{[\s\S]*?\};/);
  if (matchHomeContent) {
    newHtml = newHtml.replace(/const homeContent = \{[\s\S]*?\};/, matchHomeContent[0]);
  }

  // Fix overflow: hidden
  newHtml = newHtml.replace('      display: flex;\r\n      flex-direction: column;\r\n      position: relative;\r\n      overflow: hidden;\r\n    }', '      display: flex;\r\n      flex-direction: column;\r\n      position: relative;\r\n    }');
  newHtml = newHtml.replace('      display: flex;\n      flex-direction: column;\n      position: relative;\n      overflow: hidden;\n    }', '      display: flex;\n      flex-direction: column;\n      position: relative;\n    }');
  
  fs.writeFileSync('index.html', newHtml, 'utf8');
  console.log('index.html synced successfully (including casesData, casesRegistry, and homeContent)');
} else {
  console.log('Could not find casesData in data.js');
}
