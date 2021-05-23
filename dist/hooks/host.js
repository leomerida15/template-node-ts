"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.host = exports.prod = void 0;
exports.prod = process.argv[0] === '/root/.nvm/versions/node/v14.15.0/bin/node';
exports.host = exports.prod ? 'http://localhost:5000/' : 'http://localhost:5000/';
//# sourceMappingURL=host.js.map