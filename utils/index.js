const path = require('path')
const fs = require('fs')
const spawn = require('child_process').spawn

/**
 * Sorts dependencies in package.json alphabetically.
 * They are unsorted because they were grouped for the handlebars helpers
 * @param {object} data Data from questionnaire
 */
exports.sortDependencies = function sortDependencies(data) {
    const packageJsonFile = path.join(
        data.inPlace ? '' : data.destDirName,
        'package.json'
    )
    const packageJson = JSON.parse(fs.readFileSync(packageJsonFile))
    packageJson.devDependencies = sortObject(packageJson.devDependencies)
    packageJson.dependencies = sortObject(packageJson.dependencies)
    fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2) + '\n')
}

/**
 * Runs `npm install` in the project directory
 * @param {string} cwd Path of the created project directory
 * @param {object} data Data from questionnaire
 */
exports.installDependencies = function installDependencies(
    cwd,
    executable = 'npm'
) {
    console.log(`🔥️  Installing project dependencies.This might take a while...\n`)
    return runCommand(executable, ['install'], {
        cwd,
    })
}


/**
 * Spawns a child process and runs the specified command
 * By default, runs in the CWD and inherits stdio
 * Options are the same as node's child_process.spawn
 * @param {string} cmd
 * @param {array<string>} args
 * @param {object} options
 */
function runCommand(cmd, args, options) {
    return new Promise((resolve, reject) => {
        const spwan = spawn(
            cmd,
            args,
            Object.assign(
                {
                    cwd: process.cwd(),
                    stdio: 'inherit',
                    shell: true,
                },
                options
            )
        )

        spwan.on('exit', () => {
            resolve()
        })
    })
}


function sortObject(object) {
    // Based on https://github.com/yarnpkg/yarn/blob/v1.3.2/src/config.js#L79-L85
    const sortedObject = {}
    Object.keys(object)
        .sort()
        .forEach(item => {
            sortedObject[item] = object[item]
        })
    return sortedObject
}

exports.printMessage = function (data, color) {
    console.log()
    console.log(`🎉  Successfully created project ${data.destDirName}.`)
    console.log('👉  Get started with the following commands:')
    console.log()
    console.log()
    if (!data.inPlace) {
        console.log(` $ ${color(`cd ${data.destDirName}`)}`)
        console.log()
    }
    console.log(` $ ${color('npm start')}`)
}
