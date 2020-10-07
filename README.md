# ssm-export-cli

[![Build Status](https://travis-ci.org/rkit/ssm-export-cli.svg?branch=master)](https://travis-ci.org/rkit/ssm-export-cli)

A small library for export parameters from AWS Systems Manager.

## Export File Types

At the moment it's supported only dotenv.

## Usage

1. Add `ssm-export-cli` to the project:

   ```sh
   npm install ssm-export-cli
   ```

1. Run:

   ```sh
   npx ssm-export --path=<PATH> --file-name=<FILE NAME> --type=<TYPE>
   ```

   > to see instructions, run:\
   > `npx ssm-export`

## Example

Export parameters with path `/app/production/` to `.env`:

```sh
npx ssm-export --path=/app/production/ --file-name=./.env  --type=dotenv
```

## [Changelog](./CHANGELOG.md)

Enjoy ✌️
