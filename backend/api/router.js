const { Router } = require('express')
const proxy = require('http-proxy-middleware')

const {
  USER_MANAGER_ADDRESS,
  WATCH_MANAGER_ADDRESS,
  SCHEDULER_ADDRESS,
  CRAWLER_ADDRESS,
  NOTIFICATION_SERVICE_ADDRESS
} = process.env

const router = Router()

router.use('/user-manager', proxy({ target: USER_MANAGER_ADDRESS, changeOrigin: true }))
router.use('/watch-manager', proxy({ target: WATCH_MANAGER_ADDRESS, changeOrigin: true }))
router.use('/scheduler', proxy({ target: SCHEDULER_ADDRESS, changeOrigin: true }))
router.use('/crawler', proxy({ target: CRAWLER_ADDRESS, changeOrigin: true }))
router.use(
  '/notification-service',
  proxy({ target: NOTIFICATION_SERVICE_ADDRESS, changeOrigin: true })
)

module.exports = router
