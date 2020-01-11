const { Router } = require('express')
const proxyMiddleware = require('http-proxy-middleware')

const {
  USER_MANAGER_ADDRESS,
  WATCH_MANAGER_ADDRESS,
  SCHEDULER_ADDRESS,
  CRAWLER_ADDRESS,
  NOTIFICATION_SERVICE_ADDRESS
} = process.env

const router = Router()

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

module.exports = router
