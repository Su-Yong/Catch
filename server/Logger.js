// copy from Vokkit

const caller = require('caller-id')
const readline = require('readline')

function getTime () {
  const date = new Date()

  let hour = date.getHours()
  hour = (hour < 10 ? '0' : '') + hour
  let min = date.getMinutes()
  min = (min < 10 ? '0' : '') + min
  let sec = date.getSeconds()
  sec = (sec < 10 ? '0' : '') + sec
  
  return hour + ':' + min + ':' + sec
}

const Logger = {}

Logger.info = message => {
  readline.clearLine(process.stdout)
  readline.cursorTo(process.stdout, 0)
  let path = caller.getData().filePath
 
  process.stdout.write('\x1b[1m\x1b[36m' + getTime() + '\x1b[37m [INFO] ' + message + '\x1b[0m\n> ')
}

Logger.warn = message => {
  readline.clearLine(process.stdout)
  readline.cursorTo(process.stdout, 0)
  let path = caller.getData().filePath
  ss.stdout.write('\x1b[1m\x1b[36m' + getTime() + '\x1b[31m [Warn] ' + message + '\x1b[0m\n> ')
}

Logger.chat = message => {
  readline.clearLine(process.stdout)
  readline.cursorTo(process.stdout, 0)
  let path = caller.getData().filePath
  
  process.stdout.write('\x1b[1m\x1b[36m' + getTime() + '\x1b[37m ' + message + '\x1b[0m\n> ')
}

Logger.title = title => {
  let path = caller.getData().filePath
  
  process.stdout.write(String.fromCharCode(27) + ']0;' + title + String.fromCharCode(7))
}

module.exports = Logger