import { KeyList } from '../client/client';
import { Converter } from './converter';
export declare class DotenvConverter implements Converter {
    #private;
    constructor(filePath: string, parameters: KeyList);
    convert(): Promise<void>;
}
