const passport = require('passport')
const { facebookStrategy, jwtStrategy } = require('../configs/passport')

passport.use(facebookStrategy)
passport.use(jwtStrategy)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

module.exports = (server) => {
  server.use(passport.initialize())
}
