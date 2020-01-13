const { Router } = require('express')
const passport = require('passport')

const router = Router()

router.get(
  /^\/(index)?$/,
  passport.authenticate('jwt', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    session: false
  })
)

module.exports = (nextApp) => {
  router.get('*', nextApp.getRequestHandler())

  return router
}
