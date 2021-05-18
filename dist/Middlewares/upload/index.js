"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    //	destination: path.resolve('src/uploads'),
    destination: path_1.default.resolve('uploads'),
    filename: (req, file, cb) => cb(null, file.originalname.replace(/ /gi, '_')),
});
exports.upload = multer_1.default({ storage }).single('image');
exports.uploads = multer_1.default({ storage }).array('images', 8);
//# sourceMappingURL=index.js.map