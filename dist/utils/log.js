"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const kleur_1 = require("kleur");
exports.default = {
    success(text) {
        console.log(kleur_1.green(`✔ ${text}`));
    },
    error(error) {
        console.error(kleur_1.red(`✗ Error:`), error);
    },
    task(text) {
        process.stdout.cursorTo(0);
        process.stdout.write(kleur_1.yellow(`→ ${text} `));
        return (resultText = '') => {
            let result = text;
            if (resultText) {
                result += ` — ${resultText}`;
            }
            process.stdout.cursorTo(0);
            process.stdout.write(kleur_1.green(`✔ ${result}\n`));
        };
    },
};
//# sourceMappingURL=log.js.map