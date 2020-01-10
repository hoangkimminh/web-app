const { Router } = require('express')
const passport = require('passport')

const router = Router()

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get(
  '/auth/facebook/cb',
  passport.authenticate('facebook', { session: false }),
  (req, res) => res.json(req.user)
)

module.exports = router
