"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// scripts 
const code_1 = __importDefault(require("./code"));
exports.default = (err, req, res, next) => {
    if (!err)
        next();
    // define vars
    const descripts = code_1.default;
    const code = err.code ? err.code : err.response ? err.response.status : 500;
    const message = err.response ? err.response : err.message ? err.message : err;
    const code_descript = descripts[code] ? descripts[code] : `${code}`;
    // create obj for response
    const obj = { status: false, message, code, code_descript, path: req.originalUrl, method: req.method };
    // to write response in the consol
    const length = obj.message.length + obj.code_descript.length + obj.path.length;
    if (length < 80)
        console.table([obj]);
    else
        console.log(obj);
    // response
    res.status(code).json(obj);
};
//# sourceMappingURL=index.js.map