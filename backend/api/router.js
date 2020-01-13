const { Router } = require('express')
const proxyMiddleware = require('http-proxy-middleware')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const {
  JWT_SECRET,
  USER_MANAGER_ADDRESS,
  WATCH_MANAGER_ADDRESS,
  SCHEDULER_ADDRESS,
  CRAWLER_ADDRESS,
  NOTIFICATION_SERVICE_ADDRESS
} = process.env

const router = Router()

router.get(
  '/auth-service/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
)

router.get(
  '/auth-service/facebook/cb',
  passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const { _id, privilege } = req.user
    const token = jwt.sign({ userID: _id, userPrivilege: privilege }, JWT_SECRET)
    res
      .cookie('jwt', token, { httpOnly: true })
      .cookie('userID', _id)
      .redirect('/dashboard')
  }
)

const proxy = (path, target) => {
  router.use(
    path,
    proxyMiddleware({
      target,
      pathRewrite: { ['/api' + path]: '/' },
      changeOrigin: true
    })
  )
}

proxy('/user-manager', USER_MANAGER_ADDRESS)
proxy('/watch-manager', WATCH_MANAGER_ADDRESS)
proxy('/scheduler', SCHEDULER_ADDRESS)
proxy('/crawler', CRAWLER_ADDRESS)
proxy('/notification-service', NOTIFICATION_SERVICE_ADDRESS)

module.exports = () => router
