const http = require('http')
const port =  process.env.PORT || 3000
const routeFunction = require('./url')
http
    .createServer(routeFunction)
    .listen( port, () => console.log(`running on localhost: ${port}`) )
