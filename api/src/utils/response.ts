import { Response } from "express";

export function response(res: Response, statusCode: number, data: string) {
    return res.status(statusCode).json({
        error: false,
        data
    })
}