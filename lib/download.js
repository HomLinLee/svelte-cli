const { promisify } = require('util')
const download = require('download-git-repo')

module.exports.clone = async (repo, desc) => {
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`downloading ${repo} ...`)
    process.start()
    await download(repo, desc)
    process.succeed()
}