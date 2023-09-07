import { Request, Response, NextFunction } from "express"

export function catched (fn: any) {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res).catch((error: object) => next(error));
    }
}