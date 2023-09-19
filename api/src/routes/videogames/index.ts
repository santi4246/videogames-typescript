import { Router } from "express";
import * as controllers from "../../controllers/videogames";
import * as middlewares from "../../middlewares";

class VideogamesRoutes {
    router: Router;
    constructor () {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get("/", controllers.getVideogames);
        this.router.get("/:id", controllers.getVideogame);
        this.router.post("/", middlewares.validate, controllers.addGame);
        this.router.delete("/:id", middlewares.deleted, controllers.deleteGame);
        this.router.put("/:id", middlewares.modified, controllers.modifyGame);
    }
    
}

const videogamesRoutes = new VideogamesRoutes();
videogamesRoutes.routes();

export default videogamesRoutes.router;