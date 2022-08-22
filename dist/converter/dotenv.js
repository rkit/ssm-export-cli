"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _filePath, _parameters;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotenvConverter = void 0;
const fs_1 = require("fs");
class DotenvConverter {
    constructor(filePath, parameters) {
        _filePath.set(this, void 0);
        _parameters.set(this, void 0);
        __classPrivateFieldSet(this, _filePath, filePath);
        __classPrivateFieldSet(this, _parameters, parameters);
    }
    async convert() {
        const environment = fs_1.readFileSync(__classPrivateFieldGet(this, _filePath), 'utf-8').split('\n');
        const data = Object.keys(__classPrivateFieldGet(this, _parameters)).map((item) => `${item}=${__classPrivateFieldGet(this, _parameters)[item]}`);
        const result = [...data, ...environment.filter((x) => x && !data.includes(x))].join('\n');
        fs_1.writeFileSync(__classPrivateFieldGet(this, _filePath), result, 'utf8');
    }
}
exports.DotenvConverter = DotenvConverter;
_filePath = new WeakMap(), _parameters = new WeakMap();
//# sourceMappingURL=dotenv.js.map