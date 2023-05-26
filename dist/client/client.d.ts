import SSM from 'aws-sdk/clients/ssm';
export declare type KeyList = {
    [key: string]: string;
};
export default class Client {
    private client;
    static create(ssoprofile: string): Promise<Client>;
    fetch(requestParameters: SSM.GetParametersByPathRequest, SSMParameters?: SSM.ParameterList): Promise<KeyList>;
    getParametersByPath(path: string): Promise<KeyList>;
}
