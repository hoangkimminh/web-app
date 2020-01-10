const path = require('path')
const next = require('next')

const { NODE_ENV } = process.env

const app = next({
  dev: NODE_ENV !== 'production',
  dir: path.join(__dirname, '../../frontend')
})

module.exports = async () => {
  await app.prepare()
  return app
}
