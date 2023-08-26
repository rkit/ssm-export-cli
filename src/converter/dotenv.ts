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
    try {
      const environment = readFileSync(this.#filePath, 'utf-8').split('\n');
      const parametersKeys = Object.keys(this.#parameters);
      const data = parametersKeys.map((item) => `${item}=${this.#parameters[item]}`);
      const filteredEnvironment = environment.filter((x: any) => {
        const [key] = x.split('=');
        return key && !parametersKeys.includes(key);
      });
      const result = [...data, ...filteredEnvironment].join('\n');
      writeFileSync(this.#filePath, result, 'utf8');
    } catch {
      const parametersKeys = Object.keys(this.#parameters);
      const data = parametersKeys.map((item) => `${item}=${this.#parameters[item]}`);
      const result = data.join('\n');
      writeFileSync(this.#filePath, result, 'utf8');
    }
  }
}
