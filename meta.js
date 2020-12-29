
const path = require('path')

const {
    sortDependencies,
    installDependencies,
    printMessage
} = require('./utils')


module.exports = {

    complete: function(data, { chalk }) {

        sortDependencies(data, chalk.green)

        const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

        installDependencies(cwd, data.autoInstall)
            .then(() => {
                printMessage(data, chalk.cyanBright)
            })
            .catch(e => {
                console.log(chalk.red('Error:'), e)
            })
    }
}
