const http = require('http')

const server = http.createServer((_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(process.versions.node)
})

server.listen(8080, () => console.log('Listening on 8080'))

function handleSignal(signal) {
    console.log(`Got ${signal}`)

    server.close(err => {
        if (err) {
            console.log('Error while closing: ')
            console.log(err)
            return
        }

        console.log('Server closed well')
    })
}

process.once('SIGINT', handleSignal)
process.once('SIGTERM', handleSignal)
