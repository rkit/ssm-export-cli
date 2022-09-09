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

  async getParametersByPath(
    path: string,
    // eslint-disable-next-line unicorn/no-useless-undefined
    nextToken: string | undefined = undefined
  ): Promise<KeyList> {
    const { Parameters = [], NextToken } = await this.#client
      .getParametersByPath({
        Path: path,
        WithDecryption: true,
        Recursive: true,
        NextToken: nextToken,
      })
      .promise();

    let parsedParameters = parseParameters(Parameters);
    if (NextToken) {
      const keyList = await this.getParametersByPath(path, NextToken);
      parsedParameters = {
        ...parsedParameters,
        ...keyList,
      };
    }

    return parsedParameters;
  }
}
