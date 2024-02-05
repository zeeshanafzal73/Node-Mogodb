const os = require('os')

const hostname = os.hostname()
const username = os.userInfo()

console.log(hostname)
console.log(username)

const curruntUser = {
    name : os.type(),
    osMem : os.totalmem(),
    freeMem : os.freemem()}
console.log(curruntUser.name)

console.log(curruntUser.osMem)

console.log(curruntUser.freeMem)
