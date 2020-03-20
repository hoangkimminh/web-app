const express = require('express')
const { apiRouter, rootRouter } = require('./routers')
const { expressLoader, nextLoader, passportLoader } = require('./loaders')

const { PORT } = process.env

const main = async () => {
  try {
    const server = express()

    expressLoader(server)
    const nextApp = await nextLoader()
    passportLoader(server)

    server.use('/api', apiRouter())
    server.use('/', rootRouter(nextApp))

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
