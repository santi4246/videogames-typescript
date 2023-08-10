import { Server } from "./app";
import dbInit from "./db/init";

const server = new Server();


dbInit().then(() => {
    server.start();
});