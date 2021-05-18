"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
// app's
const apps_1 = __importDefault(require("./apps"));
// init server
// print process.argv
const prod = process.argv[0] === '/root/.nvm/versions/node/v14.15.0/bin/node';
if (prod) {
    const options = {
        key: fs_1.default.readFileSync('/etc/letsencrypt/live/api.node.devceres.cloud/privkey.pem', 'utf8'),
        cert: fs_1.default.readFileSync('/etc/letsencrypt/live/api.node.devceres.cloud/fullchain.pem', 'utf8'),
    };
    https_1.default.createServer(options, apps_1.default).listen(apps_1.default.get('port'), () => {
        console.log('                                                                  ()_()');
        console.log(`app corriendo en el puerto http://localhost:${apps_1.default.get('port')} leoM             (o.o)`);
        console.log('                                                                  (|_|)*');
    });
}
else {
    apps_1.default.listen(apps_1.default.get('port'), () => {
        console.log('                                                                  ()_()');
        console.log(`app corriendo en el puerto http://localhost:${apps_1.default.get('port')} leoM             (o.o)`);
        console.log('                                                                  (|_|)*');
    });
}
//# sourceMappingURL=app.js.map