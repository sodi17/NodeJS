import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDataSource } from "../../domain/datasources/log.datasources";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";


const prismaClient = new PrismaClient();
const severityEnum = {
    low:SeverityLevel.LOW,
    medium:SeverityLevel.MEDIUM,
    high:SeverityLevel.HIGH,
}


export class PostgressLogDataSources implements LogDataSource{
    async saveLog(log: LogEntity): Promise<void> {
        try {
            const level = severityEnum[log.level];
            await prismaClient.logModel.create({
                data: {
                    ...log,
                    level: level,
                },
            });
        } catch (error) {
            console.error("Error saving log: ", error);
            throw new Error("Error saving log");
        }
    }

    // Método para obtener logs con un nivel de severidad específico
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        try {
            const level = severityEnum[severityLevel];
            const logs = await prismaClient.logModel.findMany({
                where: {
                    level: level,
                },
            });
            return logs.map(logs => LogEntity.fromObject(logs));
        } catch (error) {
            console.error("Error retrieving logs: ", error);
            throw new Error("Error retrieving logs");
        }
    }
}