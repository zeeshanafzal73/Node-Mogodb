const EventsEmitter = require('events')
const events = new EventsEmitter.EventEmitter()

events.on('message', (message) => {
    console.log(message)
})

events.emit('message', 'Hello World')