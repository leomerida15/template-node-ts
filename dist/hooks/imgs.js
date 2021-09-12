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
exports.ImgDelete = exports.ImgRoutes = exports.ImgMoveRoute = exports.ImgRoute = exports.ImgMoves = exports.ImgMove = exports.ImgIDs = exports.ImgID = exports.ImgSvgToPng = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const host_1 = require("./host");
const svg_png_converter_1 = require("svg-png-converter");
const base = path_1.default.resolve('static');
//
const ImgSvgToPng = (preType, type, file, folder) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, exports.ImgID)(file);
    const route = `${base}/${folder ? folder + '/' : ''}${id}`;
    //
    const input = yield promises_1.default.readFile(route);
    const config = { input, encoding: 'buffer', format: type };
    const outputBuffer = yield (0, svg_png_converter_1.svg2png)(config);
    //
    yield promises_1.default.writeFile(id.replace(preType, '.png'), outputBuffer);
    //
    yield promises_1.default.rename(`${path_1.default.resolve()}/${id.replace(preType, '.png')}`, `${base}/${folder}/${id.replace(preType, '.png')}`);
    //
    yield (0, exports.ImgDelete)(id, folder);
    return `${host_1.host}static/${folder ? folder + '/' : ''}${id.replace(preType, '.png')}`;
});
exports.ImgSvgToPng = ImgSvgToPng;
//
const ImgID = (file) => file.split('/')[file.split('/').length - 1];
exports.ImgID = ImgID;
//
const ImgIDs = (files) => files.map((file) => file.split('/')[file.split('/').length - 1]);
exports.ImgIDs = ImgIDs;
//
const ImgMove = (file, folder) => __awaiter(void 0, void 0, void 0, function* () {
    yield promises_1.default.rename(`${base}/${file}`, `${base}/${folder}/${file}`);
    return `${host_1.host}static/${folder ? folder + '/' : ''}${file}`;
});
exports.ImgMove = ImgMove;
//
const ImgMoves = (files, folder) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = files.map((file) => __awaiter(void 0, void 0, void 0, function* () { return yield promises_1.default.rename(`${base}/${file}`, `${base}/${folder}/${file}`); }));
    yield Promise.all(resp);
    return files.map((file) => `${host_1.host}static/${folder}/${file}`);
});
exports.ImgMoves = ImgMoves;
//
const ImgRoute = (file, folder) => {
    return `${host_1.host}static/${folder ? folder + '/' : ''}${file.filename}`;
};
exports.ImgRoute = ImgRoute;
//
const ImgMoveRoute = (file, folder) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = (0, exports.ImgRoute)(file, folder);
    const id = (0, exports.ImgID)(resp);
    yield (0, exports.ImgMove)(id, folder);
    return resp;
});
exports.ImgMoveRoute = ImgMoveRoute;
//
const ImgRoutes = (files, folder) => {
    return files ? files.map((a) => `${host_1.host}static/${folder ? folder + '/' : ''}${a.filename}`) : [];
};
exports.ImgRoutes = ImgRoutes;
//
const ImgDelete = (file, folder) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const route = (() => {
            if (folder) {
                return path_1.default.join(base, folder, file);
            }
            else {
                return path_1.default.join(base, file);
            }
        })();
        yield promises_1.default.unlink(route);
        return true;
    }
    catch (err) {
        return false;
    }
});
exports.ImgDelete = ImgDelete;
//# sourceMappingURL=imgs.js.map