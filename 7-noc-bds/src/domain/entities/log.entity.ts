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
    createdAt?: Date;
}

export class LogEntity {
    public level : LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(options:logEntityOptions){
        const {level,message,origin,createdAt=new Date()} = options
        this.message=message;
        this.level=level;
        this.createdAt=createdAt;
        this.origin=origin;
    }
    static fromJson=(json:string):LogEntity => {
        json = (json==='')? '{}':json;
        const{message,level,createdAt,origin}=JSON.parse(json);
        //if (!message) throw new Error('Message is required');
        //if (!level) throw new Error('Level is required');
        const log = new LogEntity({message:message,level:level,createdAt:createdAt,origin:origin});
        log.createdAt=new Date();
        return log;
    }
    static fromObject=(object:{[key:string]:any}):LogEntity=>{
        const {message,level,origin,createdAt} =object;
        const log = new LogEntity({
            message,level,origin,createdAt
        });
        return log;
    }
}