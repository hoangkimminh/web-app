const { Router } = require('express')
const passport = require('passport')
const proxy = require('http-proxy-middleware')

const {
  USER_MANAGER_ADDRESS,
  WATCH_MANAGER_ADDRESS,
  SCHEDULER_ADDRESS,
  CRAWLER_ADDRESS,
  NOTIFICATION_SERVICE_ADDRESS
} = process.env

const router = Router()

const authProxy = proxy({
  target: 'http://www.example.org', // this option must be specified, but not used
  router: {
    '/api/user-manager': USER_MANAGER_ADDRESS,
    '/api/watch-manager': WATCH_MANAGER_ADDRESS
  },
  changeOrigin: true,
  pathRewrite: {
    '/api/user-manager': '/',
    '/api/watch-manager': '/'
  }
})

const noAuthProxy = proxy({
  target: 'http://www.example.org', // this option must be specified, but not used
  router: {
    '/api/scheduler': SCHEDULER_ADDRESS,
    '/api/crawler': CRAWLER_ADDRESS,
    '/api/notification-service': NOTIFICATION_SERVICE_ADDRESS
  },
  changeOrigin: true,
  pathRewrite: {
    '/api/scheduler': '/',
    '/api/crawler': '/',
    '/api/notification-service': '/'
  }
})

router.use('/', passport.authenticate('jwt', { session: false }), authProxy)
router.use('/', noAuthProxy)

module.exports = router
