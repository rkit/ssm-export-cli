# ssm-export-cli

A small library for export parameters from AWS Systems Manager.

## Supported file types for export

At the moment, only dotenv.

## Usage

1. Install the package `ssm-export`

2. Export parameters:

   ```sh
   npx ssm-export --path=<PATH> --file-name=<FILE NAME> --type=<TYPE>
   ```

## Example

Export parameters with path `/app/production/` to `.env`:

```sh
npx ssm-export --path=/app/production/ --file-name=./.env  --type=dotenv
```

## [Changelog](./CHANGELOG.md)

Enjoy ✌️
