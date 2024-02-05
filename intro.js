const names = require('./4-names') 
const setName  = require('./module')

console.log(names)
console.log(setName)

setName(names.johan)

setName(names.peter)

setName("zeeshan")