import SSM from 'aws-sdk/clients/ssm';
import { fromSSO } from '@aws-sdk/credential-provider-sso';
import { parseParameters } from './utils/parser';

export type KeyList = {
  [key: string]: string;
};

export default class Client {
  private client!: SSM;

  static async create(ssoprofile: string) {
    console.log(`✔ Using ${ssoprofile ? 'sso ' : ''}profile ${ssoprofile || 'default'}`);

    let credentials;
    const client = new Client();

    if (ssoprofile) {
      credentials = await fromSSO({ profile: ssoprofile })();
    }

    client.client = new SSM(credentials ? { credentials } : {});
    return client;
  }

  async fetch(
    requestParameters: SSM.GetParametersByPathRequest,
    SSMParameters: SSM.ParameterList = []
  ): Promise<KeyList> {
    const { NextToken, Parameters = [] } = await this.client
      .getParametersByPath(requestParameters)
      .promise();
    const parameters = [...Parameters, ...SSMParameters];

    if (NextToken) {
      return this.fetch(
        {
          ...requestParameters,
          NextToken,
        },
        parameters
      );
    }

    return parseParameters(parameters);
  }

  async getParametersByPath(path: string): Promise<KeyList> {
    return this.fetch({
      Path: path,
      WithDecryption: true,
      Recursive: true,
    });
  }
}
