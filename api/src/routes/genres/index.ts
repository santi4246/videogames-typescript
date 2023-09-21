import { Router } from "express";
import * as controllers from "../../controllers/genres";

class GenresRoutes {
    router: Router;
    constructor () {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get("/", controllers.getGenres);
    }
    
}

const genresRoutes = new GenresRoutes();
genresRoutes.routes();

export default genresRoutes.router;