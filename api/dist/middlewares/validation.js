"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const errors_1 = require("../utils/errors");
function validate(req, res, next) {
    const { name } = req.body;
    if (name) {
        next();
    }
    else {
        throw new errors_1.ClientError(401, `Property name is missing`);
    }
}
exports.validate = validate;
