import { getFormattedDate } from "../../presentation/cron/cron-date-service";


export enum LogSeverityLevel{
    low='low',
    medium='medium',
    high='high',
}

export interface logEntityOptions{
    level : LogSeverityLevel;
    message: string;
    origin: string;
    createdAt?: string;
}

export class LogEntity {
    public level : LogSeverityLevel;
    public message: string;
    public createdAt: string;
    public origin: string;

    constructor(options:logEntityOptions){
        const {level,message,origin,createdAt=getFormattedDate(new Date())} = options
        this.message=message;
        this.level=level;
        this.createdAt=createdAt;
        this.origin=origin;
    }
    static fromJson=(json:string):LogEntity => {
        const{message,level,createdAt,origin}=JSON.parse(json);
        //if (!message) throw new Error('Message is required');
        //if (!level) throw new Error('Level is required');
        const log = new LogEntity({message:message,level:level,createdAt:createdAt,origin:origin});
        log.createdAt=getFormattedDate(new Date());
        return log;
    }
}