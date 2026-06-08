const fs = require('fs');

const dataJs = fs.readFileSync('data.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract casesData block from data.js
const matchData = dataJs.match(/const casesData = \{[\s\S]*?\};\r?\n\/\* end casesData \*\//);
if (matchData) {
  let newHtml = indexHtml.replace(/const casesData = \{[\s\S]*?\};\r?\n\s*\/\* end casesData \*\//, matchData[0]);
  
  // Fix overflow: hidden
  newHtml = newHtml.replace('      display: flex;\r\n      flex-direction: column;\r\n      position: relative;\r\n      overflow: hidden;\r\n    }', '      display: flex;\r\n      flex-direction: column;\r\n      position: relative;\r\n    }');
  newHtml = newHtml.replace('      display: flex;\n      flex-direction: column;\n      position: relative;\n      overflow: hidden;\n    }', '      display: flex;\n      flex-direction: column;\n      position: relative;\n    }');
  
  // Update registry
  newHtml = newHtml.replace('location:  "San Nicol\u00E1s, NL, M\u00E9xico",', 'location:  "San Nicolas, Nuevo Leon, Mexico",');
  newHtml = newHtml.replace('location:  "Honduras",', 'location:  "San Pedro Sula, Honduras, Honduras",');
  newHtml = newHtml.replace('location:  "Cressona, PA, USA",', 'location:  "Cressona, Pennsylvania, United States",');
  
  // Replace the Confidential EU with HAI
  const confidentialEuRegex = /\{\s*id:\s*"confidential-eu"[\s\S]*?isCurrent:\s*false\s*\}/;
  const haiRegistry = '{\n      id:        "hai",\n      client:    "HAI",\n      industry:  "Aluminum Extrusion",\n      location:  "Arad County, Romania, Romania",\n      headline:  "100% elimination of crystallized deposits on flagship press",\n      date:      "2023-11",\n      isCurrent: true\n    }';
  newHtml = newHtml.replace(confidentialEuRegex, haiRegistry);
  
  fs.writeFileSync('index.html', newHtml, 'utf8');
  console.log('index.html synced successfully');
} else {
  console.log('Could not find casesData in data.js');
}
