//https://raw.githubusercontent.com/facebook/react/main/README.md --data extraida
const fs = require('fs');
const data = fs.readFileSync('README.md','utf8');
const newData=data.replace(/React/ig,'Angular');
//console.log(newData);
fs.writeFileSync('README-angular.md',newData);
