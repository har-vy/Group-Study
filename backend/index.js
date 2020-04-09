const app = require('./app.js')
const http = require('http')
const config = require('./utils/config.js')
const logger = require('./utils/logger.js')

const server = http.createServer(app)

server.listen(config.PORT, () => {
    logger.info(`server started on port ${config.PORT}`)
})