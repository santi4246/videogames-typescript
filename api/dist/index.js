"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const init_1 = __importDefault(require("./db/init"));
const server = new app_1.Server();
(0, init_1.default)().then(() => {
    server.start();
});
