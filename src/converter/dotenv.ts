import { writeFileSync, readFileSync } from 'fs';
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
    const environment = readFileSync(this.#filePath, 'utf-8').split('\n');
    const data = Object.keys(this.#parameters).map((item) => `${item}=${this.#parameters[item]}`);
    const result = [...data, ...environment.filter((x: any) => x && !data.includes(x))].join('\n');
    writeFileSync(this.#filePath, result, 'utf8');
  }
}
