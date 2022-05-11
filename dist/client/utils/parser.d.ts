import SSM from 'aws-sdk/clients/ssm';
import { KeyList } from '../client';
export declare function parseParameters(parameters: SSM.ParameterList): KeyList;
