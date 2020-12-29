
const path = require('path')

const {
    sortDependencies,
    installDependencies,
    printMessage
} = require('./utils')


module.exports = {

    complete: function(data, { chalk }) {

        const green = chalk.green

        sortDependencies(data, green)

        const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

        installDependencies(cwd, data.autoInstall)
            .then(() => {
                printMessage(data, green)
            })
            .catch(e => {
                console.log(chalk.red('Error:'), e)
            })
    }
}
