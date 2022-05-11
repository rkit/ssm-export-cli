"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseParameters = void 0;
function parseParameters(parameters) {
    const data = {};
    for (const { Name, Value = '' } of parameters) {
        const key = Name === null || Name === void 0 ? void 0 : Name.split('/').pop();
        if (key !== undefined) {
            data[key] = Value;
        }
    }
    return data;
}
exports.parseParameters = parseParameters;
//# sourceMappingURL=parser.js.map