import { LogEntity, LogSeverityLevel } from '../entities/log.entity';


export abstract class LogRepository {
  abstract saveLog( log: LogEntity ): Promise<void>;
  abstract getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>;
  abstract getLogsByDateRangeAndLevel( startDate: Date, endDate: Date,severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}


