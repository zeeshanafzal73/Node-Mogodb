const {readFileSync, writeFileSync} = require('fs')

const readSync = readFileSync('./content/second.txt', 'utf8')
const readSync2 = readFileSync('./content/subfolder/first.txt','utf8')

console.log(readSync)

writeFileSync('./content/result.txt', `Hello this is result: ${readSync} , ${readSync2}`, 'utf8')

