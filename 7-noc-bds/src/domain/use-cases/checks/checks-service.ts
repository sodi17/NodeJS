import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import * as path from 'path';

interface CheckServiceUseCase{
    execute(url:string):Promise<boolean>
}

type SuccesCallback=(()=>void)| undefined;
type ErrorCallback=((error:string)=>void)| undefined;

export class checkService implements CheckServiceUseCase {
    constructor(
        private readonly logrepository:LogRepository,
        private readonly succescallback:SuccesCallback,
        private readonly errorcallback:ErrorCallback
    ){

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
            this.logrepository.saveLog(log);
            if(this.succescallback){
                this.succescallback();
            }
            return true;
        } catch (error) {
            const errorMessage=`${url} is not Ok , ${error}`;
            const log = new LogEntity({level: LogSeverityLevel.high,
                message:errorMessage,
                origin: path.basename(__filename)});
            this.logrepository.saveLog(log); 
            if (this.errorcallback){
                this.errorcallback(`${error}`);
            }
            return false;
        }
    }
}