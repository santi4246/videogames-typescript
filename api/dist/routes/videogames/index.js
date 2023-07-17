"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class VideogamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    listGames(req, res) {
        return res.status(200).json({ message: `Videogames routes` });
    }
    routes() {
        this.router.get("/", this.listGames);
    }
}
const videogamesRoutes = new VideogamesRoutes();
videogamesRoutes.routes();
exports.default = videogamesRoutes.router;
