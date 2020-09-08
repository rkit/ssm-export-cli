#!/usr/bin/env node
import process_ from './process';
import Client from './client/client';
import { Converter } from './converter/converter';
import { DotenvConverter } from './converter/dotenv';
import log from './utils/log';
import help from './help';

process_.onCatchError((error: Error) => log.error(error));

if (process_.optionsCount === 0) {
  help.usage();
  process.exit(0);
}

const client = new Client({});

function converterByType(type: string) {
  switch (type) {
    case 'dotenv':
      return DotenvConverter;
    default:
      throw new Error(`Wrong file type for export (only 'dotenv' available)`);
  }
}

async function main() {
  const { path, filename, type } = process_.options;

  const logTask1 = log.task(`Retrieve parameters by path ${path}`);
  const parameters = await client.getParametersByPath(path);
  logTask1();

  const converter: Converter = new (converterByType(type))(filename, parameters);

  const logTask2 = log.task(`Export to ${filename}`);
  await converter.convert();
  logTask2();

  log.success('Done');
  process.exit(0);
}

(async () => main())();
