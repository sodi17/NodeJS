import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import * as path from 'path';

interface CheckServiceMultipleUseCase{
    execute(url:string):Promise<boolean>
}

type SuccesCallback=(()=>void)| undefined;
type ErrorCallback=((error:string)=>void)| undefined;

export class checkServiceMultiple implements CheckServiceMultipleUseCase {
    constructor(
        private readonly logrepository:LogRepository[],
        private readonly succescallback:SuccesCallback,
        private readonly errorcallback:ErrorCallback
    ){

    }
    private callLogs(log:LogEntity){
        this.logrepository.forEach(logRepository=>{
            logRepository.saveLog(log);
        })
    }
    async execute(url:string):Promise<boolean>{
        try {
            const req = await fetch(url);
            if(!req.ok){
            throw new Error (`Error on ${url}`);
            }
            //const log = new LogEntity(`Service ${url} is working`,LogSeverityLevel.low); 
            const log = new LogEntity({level: LogSeverityLevel.low,
                message: `Service ${url} is working`,
                origin: path.basename(__filename)}); 
            this.callLogs(log);
            if(this.succescallback){
                this.succescallback();
            }
            return true;
        } catch (error) {
            const errorMessage=`${url} is not Ok , ${error}`;
            const log = new LogEntity({level: LogSeverityLevel.high,
                message:errorMessage,
                origin: path.basename(__filename)});
                this.callLogs(log); 
            if (this.errorcallback){
                this.errorcallback(`${error}`);
            }
            return false;
        }
    }
}