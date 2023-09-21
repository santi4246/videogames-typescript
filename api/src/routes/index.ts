import { Request, Response, NextFunction, Router } from "express";
import * as pkg from "../config.json";

class IndexRoutes {
    router: Router;
    constructor () {
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
            return res.status(200).json({
                author: pkg.author,
                name: pkg.name,
                description: pkg.description,
                version: pkg.version
            });
        });        
    }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;