exports.spawn = async (...args) => {
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const processing = spawn(...args)
        processing.stdout.pipe(process.stdout)
        processing.stderr.pipe(process.stderr)
        processing.on('close', () => {
            resolve()
        })
    })
}