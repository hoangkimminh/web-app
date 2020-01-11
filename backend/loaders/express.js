const cookieParser = require('cookie-parser')

module.exports = (server) => {
  server.use(cookieParser())
}
