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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _client;
Object.defineProperty(exports, "__esModule", { value: true });
const ssm_1 = __importDefault(require("aws-sdk/clients/ssm"));
const parser_1 = require("./utils/parser");
class Client {
    constructor(options) {
        _client.set(this, void 0);
        __classPrivateFieldSet(this, _client, new ssm_1.default(options));
    }
    async getParametersByPath(path) {
        const { Parameters = [] } = await __classPrivateFieldGet(this, _client).getParametersByPath({
            Path: path,
            WithDecryption: true,
            Recursive: true,
        })
            .promise();
        return parser_1.parseParameters(Parameters);
    }
}
exports.default = Client;
_client = new WeakMap();
//# sourceMappingURL=client.js.map