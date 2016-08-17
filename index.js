#!/usr/bin/env node
// transpile:main

import yargs from 'yargs';
import { asyncify } from 'asyncbox';
import { startServer } from './lib/server';
import { IosDriver } from './lib/driver';
import { desiredCapConstraints, desiredCapValidation } from './lib/desired-caps';
import { commands, iosCommands } from './lib/commands/index';
import * as settings from './lib/settings';


const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 4723;

async function main () {
  let port = yargs.argv.port || DEFAULT_PORT;
  let host = yargs.argv.host || DEFAULT_HOST;
  return startServer(port, host);
}

if (require.main === module) {
  asyncify(main);
}

export { IosDriver, desiredCapConstraints, desiredCapValidation, commands,
         iosCommands, settings };

export default IosDriver;
