"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Key = 'user';
/** this middleware is for convert json web token in Objet format */
exports.default = (req, res, next) => {
    try {
        // define array route
        const route = req.path.split('/');
        // valid use
        const result = route.includes('log') || route.includes('admin') || route.includes('client') || route.includes('newPass');
        // use
        if (result) {
            if (req.headers.token) {
                const { token } = req.headers;
                const resp = jsonwebtoken_1.default.verify(token, Key);
                req.headers.token = resp;
                next();
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