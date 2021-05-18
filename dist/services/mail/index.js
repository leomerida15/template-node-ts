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
exports.newPass = exports.verify = void 0;
// modules
const nodemailer_1 = __importDefault(require("nodemailer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const key = '_secreto';
/** define mailOptions */
const prod = process.argv[0] === '/root/.nvm/versions/node/v14.15.0/bin/node';
const URL_WEB = prod ? `https://www.ceres-cdtec.cl/` : `http://localhost:8080`;
const from = 'proyecto.z.alpha@gmail.com';
const subject = 'latam-node';
/** create conection with email */
const mailer = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'go.code.go.pruebas@gmail.com',
        pass: 'ontlfxpnjagolnml',
    },
});
// this mail is for verify the email a user
const verify = (info) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /** define vars */
        const { name, email, _id } = info;
        const token = jsonwebtoken_1.default.sign({ _id }, key);
        const link = `${URL_WEB}/verify/${token}`;
        const to = `${email}`;
        /** Define conten of message */
        const html = /*html*/ `
        <html>
            <h1>Hola ${name}</h1>
            <p>Para terminar si registro haga click en el siguiente link</p>
            <a href="${link}">${link}</a>
        </html>`;
        /** options of email */
        const mailOptions = { from, to, subject, html };
        /** Shipping email */
        yield mailer.sendMail(mailOptions);
    }
    catch (err) {
        console.log(err);
    }
});
exports.verify = verify;
// this mail is for valid edition of a password
const newPass = (info) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /** define vars */
        const { name, email, _id } = info;
        const token = jsonwebtoken_1.default.sign({ _id }, key);
        const link = `${URL_WEB}/newPass/${token}`;
        const to = `${email}`;
        /** Define conten of message */
        const html = /*html*/ `
		<html>
            <h1>Hola ${name}</h1>
            <p>Para editar tu password haga click en el siguiente link</p>
            <a href="${link}">${link}</a>
        </html>`;
        /** options of email */
        const mailOptions = { from, to, subject, html };
        /** Shipping email */
        yield mailer.sendMail(mailOptions);
    }
    catch (err) {
        console.log(err);
    }
});
exports.newPass = newPass;
//# sourceMappingURL=index.js.map