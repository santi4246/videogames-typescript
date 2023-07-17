import { Request, Response, NextFunction, Router } from "express";

class VideogamesRoutes {
    router: Router;
    constructor () {
        this.router = Router();
        this.routes();
    }

    listGames (req: Request, res: Response) {
        return res.status(200).json({ message: `Videogames routes` });
    }

    routes() {
        this.router.get("/", this.listGames);
    }
    
}

const videogamesRoutes = new VideogamesRoutes();
videogamesRoutes.routes();

export default videogamesRoutes.router;