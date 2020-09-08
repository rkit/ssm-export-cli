#!/usr/bin/env node
import dotenv from 'dotenv';
import { parseOptions } from './utils/options';

dotenv.config();

const options = parseOptions(process.argv);

// eslint-disable-next-line no-unused-vars
type OnCatchErrorCallback = (error: any) => void;
type OnExitCallback = () => void;

function onCatchError(error: any, callback: Function) {
  callback(error);
  process.exit(1);
}

async function onExit(callback: Function) {
  if (callback && !(await callback())) {
    return;
  }

  process.exit(0);
}

export default {
  options,
  optionsCount: Object.keys(options).length,

  onCatchError: (callback: OnCatchErrorCallback) => {
    process.on('unhandledRejection', (error) => onCatchError.call(this, error, callback));
    process.on('uncaughtException', (error) => onCatchError.call(this, error, callback));
  },

  onExit: (callback: OnExitCallback) => {
    process.on('SIGINT', onExit.bind(this, callback));
    process.on('SIGTERM', onExit.bind(this, callback));
  },
};
