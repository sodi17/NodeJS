import  fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

//console.log(yarg);
const {b:base,l:limit,s:show}=yarg;
//var j:number=yarg.b;
let mult:number;
let outputmessage='';
let headermessage=`========================
                    Tabla del ${base}
                ========================\n`;
for(let i=1 ; i<=limit;i++){
    mult=i*base;
    outputmessage+=`${base} x ${i} = ${mult}\n`;
}
outputmessage=headermessage+outputmessage;
if (show===true) console.log(outputmessage);
const outputpath= `outputs`;
fs.mkdirSync(outputpath,{recursive:true});
fs.writeFileSync(`${outputpath}/tabla-${base}.txt`,outputmessage);