"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleted = void 0;
const errors_1 = require("../utils/errors");
const uuid_1 = require("uuid");
function deleted(req, res, next) {
    const { id } = req.params;
    if ((0, uuid_1.validate)(id)) {
        next();
    }
    else {
        throw new errors_1.ClientError(401, `This kind of games cannot deleted from API`);
    }
}
exports.deleted = deleted;
