"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptions = void 0;
function parseOptions(optionsArray) {
    const options = {};
    optionsArray
        .filter((item) => item.indexOf('--') === 0)
        .forEach((item) => {
        const [option, value] = item.split('=');
        const optionName = option.slice(2).replace(/-/g, '');
        options[optionName] = value;
    });
    return options;
}
exports.parseOptions = parseOptions;
//# sourceMappingURL=options.js.map