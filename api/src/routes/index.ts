import { Request, Response, NextFunction, Router } from "express";
import videogamesRoutes from "./videogames";
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
        this.router.get("/videogames", videogamesRoutes);
    }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;