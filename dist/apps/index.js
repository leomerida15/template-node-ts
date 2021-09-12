"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
const express_1 = __importDefault(require("express"));
const Middlewares_1 = require("../Middlewares");
const routes_1 = __importDefault(require("../routes"));
const app = (0, express_1.default)();
//database
// import '../db/';
// middleware preRoutes
(0, Middlewares_1.preRoutes)(app);
app.use(express_1.default.json());
// Routes
(0, routes_1.default)(app);
// meddleware posRutes
(0, Middlewares_1.posRoutes)(app);
// Settings
app.set('port', process.env.PORT || 5050);
exports.default = app;
//# sourceMappingURL=index.js.map