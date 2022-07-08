#!/usr/bin/env node
const { Command } = require('commander')
const version = require('../package.json').version

const program = new Command()
program.command('init <repo>')
    .description('init repo')
    .version(version)
    .action(require('../lib/init'))