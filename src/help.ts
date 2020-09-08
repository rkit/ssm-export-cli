/* eslint-disable no-console */
import { green } from 'kleur';

export default {
  usage: () =>
    console.log(`Usage:
${green('npx ssm-export')} --path=<PATH> --file-name=<FILE NAME> --type=<TYPE>

Options:
  --path       Parameters path. It begins with a forward slash (/).
  --file-name  File name for export
  --type       Export file type. Supported types: dotenv

Example:
${green('npx ssm-export')} --path=/app/production/ --file-name=./.env  --type=dotenv
`),
};
