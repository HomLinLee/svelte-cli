const inquirer = require('inquirer')

module.exports.input = async (args) => {
    let res = await inquirer.prompt([
        {
            type: 'input',
            message: 'input your project name',
            name: args.name,
        }
    ]);
    // console.log(res)
    return Promise.resolve(res)
}

exports.choose = async (args) => {
    let res = await inquirer.prompt([
        {
            type: 'list',
            message: 'choose one answer',
            name: args.name,
            default: args.default,
            choices: args.choices
        }
    ])
    return Promise.resolve(res)
}
