import fs from 'fs';
import { Converter } from '../../src/converter/converter';
import { DotenvConverter } from '../../src/converter/dotenv';

jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));

describe('DotEnv Converter', () => {
  test('Try to convert', async () => {
    const converter: Converter = new DotenvConverter('./test.env', {
      param1: 'value1',
      param2: 'value2',
    });

    await converter.convert();

    expect(fs.writeFileSync).toBeCalledWith('./test.env', `param1=value1\nparam2=value2`, 'utf8');
  });
});
