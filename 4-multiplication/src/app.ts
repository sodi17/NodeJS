import { yarg } from "./config/plugins/args.plugin";
import { serverapp } from "./presentation/server-app";

//console.log(yarg.b);
(async()=>{
    await main();
})();

async function main(){
    //console.log(yarg);
    const {b:base,l:limit,s:show,n:name,d:destination} = yarg;
    serverapp.run({base,limit,show,name,destination});
}