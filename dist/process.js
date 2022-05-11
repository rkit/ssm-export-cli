#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const options_1 = require("./utils/options");
dotenv_1.default.config();
const options = options_1.parseOptions(process.argv);
function onCatchError(error, callback) {
    callback(error);
    process.exit(1);
}
async function onExit(callback) {
    if (callback && !(await callback())) {
        return;
    }
    process.exit(0);
}
exports.default = {
    options,
    optionsCount: Object.keys(options).length,
    onCatchError: (callback) => {
        process.on('unhandledRejection', (error) => onCatchError.call(this, error, callback));
        process.on('uncaughtException', (error) => onCatchError.call(this, error, callback));
    },
    onExit: (callback) => {
        process.on('SIGINT', onExit.bind(this, callback));
        process.on('SIGTERM', onExit.bind(this, callback));
    },
};
//# sourceMappingURL=process.js.map