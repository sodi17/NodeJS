import { logModel } from "../../data/mongo";
import { LogDataSource } from "../../domain/datasources/log.datasources";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class MongoLogDatasources implements LogDataSource{
    async saveLog(Log: LogEntity): Promise<void> {
        const newLog = await logModel.create(Log);
        console.log('Mongo log create: ',newLog.id);
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await logModel.find({
            level:severityLevel
        });
        return logs.map(mongolog=>LogEntity.fromObject(mongolog));
        //return logs.map(LogEntity.fromObject);
    }

}