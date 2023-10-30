import { Response as ExpressResponse } from "express";

export class Response {
    public static success(res: ExpressResponse, data: any, status: number = 200) : void {
        res.status(status).json({
            status: `success`,
            data
        });
    }

    public static error(res: ExpressResponse, message: string, status: number = 500): void {
        res.status(status).json({
            status: `error`,
            message,
        });
    }
    
} 