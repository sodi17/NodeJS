//import 'dotenv/config';
//import { envs } from './config/plugins/env.plugins';
import { Server } from './presentation/server';

(async()=>{
    //await main();
    main();
})();

function main(){
    Server.start();
}