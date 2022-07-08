const { promisify } = require('util')
const { clone } = require('./download')
const chalk = require('chalk')
const figlet = promisify(require('figlet'))
const { input, choose } = require('./prompt')
const { spawn } = require('./spawn')

const log = (...msg) => console.log(chalk.green(...msg))
log(`init repo`)
function isYarn(module) {
    return module === 'yarn'
}
async function cloneAction() {
    const data = await figlet(`Welcome!`)
    log(data)
    let inputResult = await input({
        default:'my-app',
        name: 'project name'
    });
    let cloneResult = await clone(`github:HomLinLee/svelte-tailwind`, inputResult['project name'])
    log('cloning ends')
    let chooseResult = await choose({
        name: 'module',
        default: 'npm',
        choices: ['npm', 'yarn', 'pnpm', 'cnpm']
    })
    // console.log(chooseResult, chooseResult.module)
    await spawn(chooseResult.module, isYarn(chooseResult.module) ? [] : ['install'], {
        cwd: `./${inputResult['project name']}`
    })
    log(`
        installing ends
        ==============
        cd ${inputResult['project name']}
        npm run dev
        ==============
    `)
    const open = require('open')
    open('http://localhost:3000/')
    await spawn(chooseResult.module, isYarn(chooseResult.module) ? ['dev'] : ['run', 'dev'], { cwd: `./${inputResult['project name']}` })
}
cloneAction()
