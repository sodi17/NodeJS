import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { emailService } from "../email/email.service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImp } from "../infrastructure/repositorys/log-imp.repository";


const fileSystemRepository= new LogRepositoryImp(
    new FileSystemDatasource(),
);
const emailservice=new emailService();
export class Server{
    static start(){
        console.log('Server started...');
        //mandar email
        new SendEmailLogs(emailservice,fileSystemRepository).execute('sotodiaz17@gmail.com');
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

        //CronService.createjob('*/5 * * * * *',()=>{            
            //new checkService().execute('http://localhost:3000/posts');
          //  const url='http://google.com';
            //new checkService(
              //  fileSystemRepository,
                //undefined,
                //undefined,
                //()=>console.log(`The URL ${url} is ok!`,getFormattedDate(new Date())),
               // (error)=>console.log(error)
            //).execute(url);
        //});


    }
}