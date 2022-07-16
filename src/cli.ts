#!/usr/bin/env node
import process_ from './process';
import Client from './client/client';
import { Converter } from './converter/converter';
import { DotenvConverter } from './converter/dotenv';
import log from './utils/log';
import help from './help';

process.env.AWS_SDK_LOAD_CONFIG = 'true';
process_.onCatchError((error: Error) => log.error(error));

if (process_.optionsCount === 0) {
  help.usage();
  process.exit(0);
}

function converterByType(type: string) {
  switch (type) {
    case 'dotenv':
      return DotenvConverter;
    default:
      throw new Error(`Wrong file type for export (only 'dotenv' available)`);
  }
}

async function main() {
  const { path, filename, type, ssoprofile } = process_.options;

  const client = await Client.create(ssoprofile);

  const parameters = await client.getParametersByPath(path);
  console.log(`✔ Retrieve parameters by path ${path}`);

  const converter: Converter = new (converterByType(type))(filename, parameters);

  await converter.convert();
  console.log(`✔ Export to ${filename}`);

  console.log('✔ Done');
  process.exit(0);
}

(async () => main())();
