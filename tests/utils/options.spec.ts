import { parseOptions } from '../../src/utils/options';

describe('Options', () => {
  test('Try to parse', () => {
    const options = parseOptions(['foo', 'bar', '--param1=value1', '--param-2=value2']);

    expect(options).toStrictEqual({
      param1: 'value1',
      param2: 'value2',
    });
  });
});
