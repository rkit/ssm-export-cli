import SSM from 'aws-sdk/clients/ssm';
export declare type KeyList = {
    [key: string]: string;
};
export default class Client {
    #private;
    constructor(options: SSM.ClientConfiguration);
    getParametersByPath(path: string): Promise<KeyList>;
}
