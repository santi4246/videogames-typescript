"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./db");
const server = new app_1.Server();
db_1.sequelize.sync({ force: true }).then(() => {
    server.start();
});
