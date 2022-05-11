#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("./process"));
const client_1 = __importDefault(require("./client/client"));
const dotenv_1 = require("./converter/dotenv");
const log_1 = __importDefault(require("./utils/log"));
const help_1 = __importDefault(require("./help"));
process.env.AWS_SDK_LOAD_CONFIG = 'true';
process_1.default.onCatchError((error) => log_1.default.error(error));
if (process_1.default.optionsCount === 0) {
    help_1.default.usage();
    process.exit(0);
}
const client = new client_1.default({});
function converterByType(type) {
    switch (type) {
        case 'dotenv':
            return dotenv_1.DotenvConverter;
        default:
            throw new Error(`Wrong file type for export (only 'dotenv' available)`);
    }
}
async function main() {
    const { path, filename, type } = process_1.default.options;
    const parameters = await client.getParametersByPath(path);
    console.log(`✔ Retrieve parameters by path ${path}`);
    const converter = new (converterByType(type))(filename, parameters);
    await converter.convert();
    console.log(`✔ Export to ${filename}`);
    console.log('✔ Done');
    process.exit(0);
}
(async () => main())();
//# sourceMappingURL=cli.js.map