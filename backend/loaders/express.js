const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

module.exports = (server) => {
  server.use(bodyParser.json())
  server.use(cookieParser())
}
