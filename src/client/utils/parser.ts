import SSM from 'aws-sdk/clients/ssm';
import { KeyList } from '../client';

export function parseParameters(parameters: SSM.ParameterList) {
  const data: KeyList = {};

  for (const { Name, Value = '' } of parameters) {
    const key = Name?.split('/').pop();

    if (key !== undefined) {
      data[key] = Value;
    }
  }

  return data;
}
