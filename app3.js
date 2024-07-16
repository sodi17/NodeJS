const fs = require('fs');
const data = fs.readFileSync('README.md','utf8');


const wordCount = data.split(' ').length;
/*const a = data.split(' ');
var b=0;
for (var i=0;i<data.split(' ').length;i++){
     if(a[i]=='React' || a[i]=='react'){
           b=b+1;
     }
}
const wordCountReact=b;*/
const wordCountReact = data.match(/react/ig).length;

console.log(wordCount);
console.log(wordCountReact);