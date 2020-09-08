import { writeFileSync } from 'fs';
import { KeyList } from '../client/client';
import { Converter } from './converter';

export class DotenvConverter implements Converter {
  #filePath: string;

  #parameters: KeyList;

  constructor(filePath: string, parameters: KeyList) {
    this.#filePath = filePath;
    this.#parameters = parameters;
  }

  async convert(): Promise<void> {
    const data = Object.keys(this.#parameters).map((item) => `${item}=${this.#parameters[item]}`);
    const text = data.join('\n');

    writeFileSync(this.#filePath, text, 'utf8');
  }
}
