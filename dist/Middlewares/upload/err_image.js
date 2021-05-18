"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.file_files_err = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const file_files_err = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.file) {
        let valid = 0;
        const { path, filename } = err.file;
        if (err.model)
            valid = err.model.find({ image: filename });
        if (valid.length === 0 || !err.model)
            yield promises_1.default.unlink(path);
    }
    else if (req.files && req.files.length) {
        let valid = 0;
        const images = err.files.map((file) => ({ image: file.filename }));
        if (err.model)
            valid = err.model.find({ $or: images });
        if (valid.length === 0) {
            const array = err.files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
                const { path } = file;
                yield promises_1.default.unlink(path);
            }));
            yield Promise.all(array);
        }
    }
    next(err);
});
exports.file_files_err = file_files_err;
//# sourceMappingURL=err_image.js.map