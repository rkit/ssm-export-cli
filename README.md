# ssm-export-cli

[![Build Status](https://travis-ci.org/rkit/ssm-export-cli.svg?branch=master)](https://travis-ci.org/rkit/ssm-export-cli)

A small library for export parameters from AWS Systems Manager.

## Export File Types

At the moment it's supported only dotenv.

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
