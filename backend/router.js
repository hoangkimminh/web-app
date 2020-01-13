const { Router } = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const { JWT_SECRET } = process.env

const router = Router()

router.get(
  /^\/(index)?$/,
  passport.authenticate('jwt', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    session: false
  })
)

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get(
  '/auth/facebook/cb',
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

module.exports = (nextApp) => {
  router.get('*', nextApp.getRequestHandler())

  return router
}
