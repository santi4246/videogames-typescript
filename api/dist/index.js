"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
const PORT = 3001;
db_1.sequelize.authenticate().then(() => {
    app_1.default.listen(PORT, () => {
        console.log("Server is listening on port: ", PORT);
    });
});
