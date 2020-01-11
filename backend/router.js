const { Router } = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const { JWT_SECRET } = process.env

const router = Router()

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get(
  '/auth/facebook/cb',
  passport.authenticate('facebook', { failureRedirect: '/', session: false }),
  (req, res) => {
    const token = jwt.sign(req.user, JWT_SECRET)
    res.cookie('jwt', token, { httpOnly: true }).redirect('/dashboard')
  }
)

module.exports = router
