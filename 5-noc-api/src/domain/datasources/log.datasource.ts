import { LogEntity, LogSeverityLevel } from '../entities/log.entity';


export abstract class LogDatasource {
  abstract saveLog( log: LogEntity ): Promise<void>;
  abstract getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>;
  abstract getLogsByDateRangeAndLevel( startDate: Date, endDate: Date,level:LogSeverityLevel): Promise<LogEntity[]>;
}


