"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const kleur_1 = require("kleur");
exports.default = {
    usage: () => console.log(`Usage:
${kleur_1.green('npx ssm-export')} --path=<PATH> --file-name=<FILE NAME> --type=<TYPE>

Options:
  --path       Parameters path. It begins with a forward slash (/).
  --file-name  File name for export
  --type       Export file type. Supported types: dotenv

Example:
${kleur_1.green('npx ssm-export')} --path=/app/production/ --file-name=./.env  --type=dotenv
`),
};
//# sourceMappingURL=help.js.map