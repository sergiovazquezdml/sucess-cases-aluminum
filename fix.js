const fs = require('fs');

function fixFile(file) {
  if (!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  
  // Fix the syntax error causing node data.js to fail
  // The unescaped quote is in: 10" Presezzi
  text = text.replace(/10\" Presezzi/g, '10\\\" Presezzi');
  text = text.replace(/10"" Presezzi/g, '10\\\" Presezzi');
  text = text.replace(/10" Presezzi/g, '10\\\" Presezzi');
  
  // Also any other unescaped 10"
  text = text.replace(/10" Presezzi/g, '10\\\" Presezzi');

  // Remove accents
  text = text.replace(/San Nicolás/g, 'San Nicolas');
  text = text.replace(/San NicolÃ¡s/g, 'San Nicolas');
  text = text.replace(/San Nicolǭs/g, 'San Nicolas');
  
  text = text.replace(/Nuevo León/g, 'Nuevo Leon');
  text = text.replace(/Nuevo LeÃ³n/g, 'Nuevo Leon');
  text = text.replace(/Nuevo Len/g, 'Nuevo Leon');
  
  text = text.replace(/México/g, 'Mexico');
  text = text.replace(/MÃ©xico/g, 'Mexico');
  text = text.replace(/Mxico/g, 'Mexico');
  
  text = text.replace(/Chisineu-Criș/g, 'Chisineu-Cris');
  text = text.replace(/Chisineu-CriÈ™/g, 'Chisineu-Cris');
  text = text.replace(/Chisineu-CriT/g, 'Chisineu-Cris');
  text = text.replace(/Chisineu-CriT/g, 'Chisineu-Cris');
  
  text = text.replace(/Rumania/g, 'Romania');
  
  // Fix weird characters in titles
  text = text.replace(/Success Cases  The Uncommon Lubricant Company/g, 'Success Cases - The Uncommon Lubricant Company');
  text = text.replace(/less lubricant  98,865 lb/g, 'less lubricant - 98,865 lb');
  text = text.replace(/less lubricant Â· 98,865 lb/g, 'less lubricant - 98,865 lb');
  
  // Make sure gallery HAI is properly named
  text = text.replace(/Arad County, Romania, Romania/g, 'Arad County, Romania');
  
  fs.writeFileSync(file, text, 'utf8');
}

fixFile('data.js');
fixFile('index.html');
console.log('Fixed files');
