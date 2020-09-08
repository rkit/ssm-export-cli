/* eslint-disable no-console */
import { yellow, green, red } from 'kleur';

export default {
  success(text: string) {
    console.log(green(`✔ ${text}`));
  },

  error(error: Error) {
    console.error(red(`✗ Error:`), error);
  },

  task(text: string) {
    process.stdout.cursorTo(0);
    process.stdout.write(yellow(`→ ${text} `));

    return (resultText: string = '') => {
      let result = text;

      if (resultText) {
        result += ` — ${resultText}`;
      }

      process.stdout.cursorTo(0);
      process.stdout.write(green(`✔ ${result}\n`));
    };
  },
};
