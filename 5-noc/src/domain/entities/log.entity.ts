import { getFormattedDate } from "../../presentation/cron/cron-date-service";


export enum LogSeverityLevel{
    low='low',
    medium='medium',
    high='high',
}

export class LogEntity {
    public level : LogSeverityLevel;
    public message: string;
    public createdAt: string;

    constructor(message:string,level:LogSeverityLevel){
        this.message=message;
        this.level=level;
        this.createdAt=getFormattedDate(new Date());
    }
    static fromJson=(json:string):LogEntity => {
        const{message,level,createdAt}=JSON.parse(json);
        //if (!message) throw new Error('Message is required');
        //if (!level) throw new Error('Level is required');
        const log = new LogEntity(message,level);
        log.createdAt=getFormattedDate(new Date());
        return log;
    }
}