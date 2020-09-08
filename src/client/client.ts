import SSM from 'aws-sdk/clients/ssm';
import { parseParameters } from './utils/parser';

export type KeyList = {
  [key: string]: string;
};

export default class Client {
  #client: SSM;

  constructor(options: SSM.ClientConfiguration) {
    this.#client = new SSM(options);
  }

  async getParametersByPath(path: string): Promise<KeyList> {
    const { Parameters = [] } = await this.#client
      .getParametersByPath({
        Path: path,
        WithDecryption: true,
        Recursive: true,
      })
      .promise();

    return parseParameters(Parameters);
  }
}
