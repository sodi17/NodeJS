import { emailService } from "../../../email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";


interface sendLogEmailUseCase {
    execute:(to:string|string[]) =>Promise<boolean>
}

export class SendEmailLogs implements sendLogEmailUseCase{
    constructor (
        private readonly emailservice:emailService,
        private readonly logrepository:LogRepository
    ){

    }


    async execute (to: string | string[]){
        try {
            const sent=await this.emailservice.SendEmailWithFilesSystemsLog(to);
            if(!sent){
                throw new Error('Email log not sent');
            }
            const log = new LogEntity({
                message:`Log email was sent`,
                level:LogSeverityLevel.low,
                origin:'send-logs.ts'
            })
            this.logrepository.saveLog(log);
            return true;
        } catch (error) {
            const log = new LogEntity({
                message:`${error}`,
                level:LogSeverityLevel.high,
                origin:'send-logs.ts'
            })
            this.logrepository.saveLog(log);
            return false;
        }

    
    }
}