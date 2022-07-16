export declare type KeyList = {
    [key: string]: string;
};
export default class Client {
    private client;
    static create(ssoprofile: string): Promise<Client>;
    getParametersByPath(path: string): Promise<KeyList>;
}
