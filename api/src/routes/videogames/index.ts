import { Router } from "express";
import * as controllers from "../../controllers/videogames";

class VideogamesRoutes {
    router: Router;
    constructor () {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get("/", controllers.getVideogames);
        this.router.get("/:id", controllers.getVideogame);
        this.router.post("/", controllers.addGame);
    }
    
}

const videogamesRoutes = new VideogamesRoutes();
videogamesRoutes.routes();

export default videogamesRoutes.router;