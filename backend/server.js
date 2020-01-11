const express = require('express')
const apiRouter = require('./api/router')
const rootRouter = require('./router')
const expressLoader = require('./loaders/express')
const nextLoader = require('./loaders/next')
const passportLoader = require('./loaders/passport')

const { PORT } = process.env

const main = async () => {
  try {
    const server = express()

    server.use('/api', apiRouter)
    server.use('/', rootRouter)

    // apiRouter must be above expressLoader
    // aka proxies must be handled before body-parser
    expressLoader(server)
    passportLoader(server)

    const nextApp = await nextLoader()
    server.get('*', nextApp.getRequestHandler())

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
