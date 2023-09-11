"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const errors_1 = require("../utils/errors");
function validate(req, res, next) {
    const { name, launch, rating, description, genres, platforms, img } = req.body;
    if (name && launch && rating && description && genres && platforms && img) {
        next();
    }
    else {
        throw new errors_1.ClientError(401, `Some properties are missing. Check name, launch, rating, description, genres, platforms or img`);
    }
}
exports.validate = validate;
