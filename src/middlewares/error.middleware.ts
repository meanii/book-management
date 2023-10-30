import { ErrorRequestHandler } from "express";

export class ErrorMiddleware {

    /**
     * @description Handles all errors
     */
    static error: ErrorRequestHandler = (err, _req, res, _next) => {
        const status: number = err.status ?? 500;
        const message: string = err.message ?? `Something went wrong`;
        return res.status(status).json({ status: `error`, message });
    };
  
}