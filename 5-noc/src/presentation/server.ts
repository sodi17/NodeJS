import { checkService } from "../domain/use-cases/checks/checks-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImp } from "../infrastructure/repositorys/log-imp.repository";
import { getFormattedDate } from "./cron/cron-date-service";
import { CronService } from "./cron/cron-service";


const fileSystemRepository= new LogRepositoryImp(
    new FileSystemDatasource(),
);

export class Server{
    static start(){
        console.log('Server started...');
        CronService.createjob('*/5 * * * * *',()=>{            
            //new checkService().execute('http://localhost:3000/posts');
            const url='http://google.com';
            new checkService(
                fileSystemRepository,
                //undefined,
                //undefined,
                ()=>console.log(`The URL ${url} is ok!`,getFormattedDate(new Date())),
                (error)=>console.log(error)
            ).execute(url);
        });


    }
}