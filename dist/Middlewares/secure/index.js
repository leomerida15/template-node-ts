"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
/** list the host auth */
const white_list = [''];
// const origin = (origin: string, cb) => cb(null, white_list.includes(origin));
const origin = (origin, cb) => cb(null, true);
/** Cors Option */
const corsOptions = {
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin,
};
exports.default = cors_1.default(corsOptions);
//# sourceMappingURL=index.js.map