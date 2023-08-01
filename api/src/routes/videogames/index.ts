import { Request, Response, NextFunction, Router } from "express";
import * as controllers from "../../controllers/index";

class VideogamesRoutes {
    router: Router;
    constructor () {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get("/", controllers.getVideogames);
    }
    
}

const videogamesRoutes = new VideogamesRoutes();
videogamesRoutes.routes();

export default videogamesRoutes.router;