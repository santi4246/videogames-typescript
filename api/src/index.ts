import { Server } from "./app";
import { sequelize } from "./db";

const server = new Server();


sequelize.sync({ force: true }).then(() => {
    server.start();
});