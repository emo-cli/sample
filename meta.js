
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

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
          .then(() => {
            return runLintFix(cwd, data, green)
          })
          .then(() => {
            printMessage(data, green)
          })
          .catch(e => {
            console.log(chalk.red('Error:'), e)
          })
    } else {
      printMessage(data, chalk)
    }
  },
}
