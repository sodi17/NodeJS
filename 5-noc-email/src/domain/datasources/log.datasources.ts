import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


export abstract class LogDataSource{
    abstract saveLog ( Log:LogEntity):Promise<void>;
    abstract getLogs ( severityLevel:LogSeverityLevel):Promise<LogEntity[]>;
}