export function parseOptions(optionsArray: string[]) {
  type Options = {
    [key: string]: string;
  };

  const options: Options = {};

  optionsArray
    .filter((item) => item.indexOf('--') === 0)
    .forEach((item) => {
      const [option, value] = item.split('=');
      const optionName = option.slice(2).replace(/-/g, '');

      options[optionName] = value;
    });

  return options;
}
