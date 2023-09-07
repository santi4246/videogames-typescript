"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientError = void 0;
class ClientError extends Error {
    constructor(statusCode = 400, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ClientError = ClientError;
