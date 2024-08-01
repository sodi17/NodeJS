
import { checkService } from "../domain/use-cases/checks/checks-service";
import { checkServiceMultiple } from "../domain/use-cases/checks/checks-service-multiple";
import { emailService } from "../email/email.service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasources } from "../infrastructure/datasources/mongo-log.datasources";
import { PostgressLogDataSources } from "../infrastructure/datasources/postgres-log.datasources";
import { LogRepositoryImp } from "../infrastructure/repositorys/log-imp.repository";
import { getFormattedDate } from "./cron/cron-date-service";
import { CronService } from "./cron/cron-service";


const fileSystemDatasource= new LogRepositoryImp(
    new FileSystemDatasource(),
);

const mongoLogDatasources= new LogRepositoryImp(    
    new MongoLogDatasources()
);

const postgressLogDataSources= new LogRepositoryImp(
    new PostgressLogDataSources(),
);
const emailservice=new emailService();
export class Server{
    static async start(){
        console.log('Server started...');
        //mandar email
        //new SendEmailLogs(emailservice,fileSystemRepository).execute('sotodiaz17@gmail.com');
        //emailservice.SendEmailWithFilesSystemsLog('sotodiaz17@gmail.com');
        /*emailservice.sendEmail({
            to:'sotodiaz17@gmail.com',
            subject:"System's log ",
            htmlBody:`
            <h3>Logs de Sistema Noc</h3>
            <p>lorem<p>
            <p>Ver logs adjuntos</p>
            `
        })*/

        CronService.createjob('*/5 * * * * *',()=>{            
            //new checkService().execute('http://localhost:3000/posts');
            const url='http://google.com';
            //new checkService[](
            new checkServiceMultiple(
                [fileSystemDatasource,mongoLogDatasources,postgressLogDataSources],
                //undefined,
                //undefined,
                ()=>console.log(`The URL ${url} is ok!`,getFormattedDate(new Date())),
                (error)=>console.log(error)
            ).execute(url);
        });

        //const logs = await logRepository.getLogs(LogSeverityLevel.high);
        //console.log(logs);


    }
}