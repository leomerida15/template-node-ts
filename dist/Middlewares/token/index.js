"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const list_1 = __importDefault(require("./list"));
const Key = process.env.KEY || 'user';
/** this middleware is for convert json web token in Objet format */
exports.default = (req, res, next) => {
    try {
        // define array route
        const route = req.path.split('/');
        // valid use
        const result = list_1.default.includes(route[1]);
        // use
        if (result) {
            if (req.headers.token) {
                const { token } = req.headers;
                const resp = jsonwebtoken_1.default.verify(token, Key);
                req.headers.token = resp;
                next();
                //
            }
            else
                throw { status: false, message: 'the JWT in require', code: 400 };
        }
        else {
            next();
        }
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=index.js.map