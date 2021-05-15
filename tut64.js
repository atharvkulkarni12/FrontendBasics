const fs = require('fs');
let text = fs.readFileSync('file.txt','utf-8');
text = text.replace('random','useful');
console.log(text);
fs.writeFileSync('ufile.txt',text);