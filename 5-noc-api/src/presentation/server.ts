import { LogSeverityLevel } from '../domain/entities/log.entity';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import express from 'express';
import bodyParser from 'body-parser';

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);


const app = express();
const port = 3000;

export class Server {

  public static start() {

    console.log( 'Server started...' );

    
    //CronService.createJob(
      //'*/5 * * * * *',
      //() => {
        //const url = 'https://google.com';
        //new CheckService(
          //fileSystemLogRepository,
          //() => console.log( `${ url } is ok` ),
          //( error ) => console.log( error ),
        //).execute( url );
        
      //}
    //)
    
    //const startDate = new Date('2024-07-29T17:25:28.245Z');
    //const endDate = new Date('2024-07-30T17:25:28.245Z');

    /*
    function parseDate(dateString: string): Date {
      const [day, month, year] = dateString.split('-').map(Number);
      return new Date(year, month - 1, day); // Los meses en JavaScript son 0-indexados
    }
    
    
    const startDate = parseDate('29-07-2024');
    const endDate = parseDate('30-07-2024');

    const severity=LogSeverityLevel.high;
    fileSystemLogRepository.getLogsByDateRangeAndLevel(startDate, endDate,severity).then(logs => {
      console.log('Logs in date range:', logs);
    });
      ;*/
    
      app.get('/logs/:severityLevel', async (req, res) => {
        try {
          const severityLevel = req.params.severityLevel as LogSeverityLevel;
          const logs = await fileSystemLogRepository.getLogs(severityLevel);
          res.status(200).json(logs);
        } catch (error) {
          res.status(500).send('An unexpected error occurred');
        }
      });

      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });


  }


}


