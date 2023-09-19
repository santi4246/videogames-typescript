"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modified = void 0;
const errors_1 = require("../utils/errors");
const uuid_1 = require("uuid");
function modified(req, res, next) {
    const { id } = req.params;
    if ((0, uuid_1.validate)(id)) {
        next();
    }
    else {
        throw new errors_1.ClientError(401, `This kind of games cannot modified from API`);
    }
}
exports.modified = modified;
