//import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { envs } from './config/plugins/env.plugins';
import { logModel, mongoDatabase } from './data/mongo';
import { Server } from './presentation/server';

(async()=>{
    //await main();
    main();
})();

async function main(){
    await mongoDatabase.conect({
        mongourl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

   // const prisma = new PrismaClient();
/* const newLog =await prisma.logModel.create({
        data:{
            level:'HIGH',
            message:'test message',
            origin:'app.ts'
        }
    })
    console.log(newLog);*/
   // const logs=await prisma.logModel.findMany({
        //where:{
       //     level:'MEDIUM'
       // }
   // });
    //console.log(logs);

    //crear una coleccion = tabla , documento = registro
    /*const newLog= await logModel.create({
        message:'Test message desde mongo',
        origin:'app.ts',
        level:'low',

    })
    await newLog.save();*/
    
    //verificar
    //const logs=await logModel.find();
    //console.log(logs[0].message);

    Server.start();
}