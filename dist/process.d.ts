#!/usr/bin/env node
declare type OnCatchErrorCallback = (error: any) => void;
declare type OnExitCallback = () => void;
declare const _default: {
    options: {
        [key: string]: string;
    };
    optionsCount: number;
    onCatchError: (callback: OnCatchErrorCallback) => void;
    onExit: (callback: OnExitCallback) => void;
};
export default _default;
