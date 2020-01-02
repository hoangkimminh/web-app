const FacebookStrategy = require('passport-facebook').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwt = require('jsonwebtoken')
const axios = require('axios')

const { FB_APP_ID, FB_APP_SECRET, JWT_SECRET, USER_MANAGER_ADDRESS } = process.env

const facebookStrategy = new FacebookStrategy(
  {
    clientID: FB_APP_ID,
    clientSecret: FB_APP_SECRET,
    callbackURL: '/auth/facebook/cb',
    profileFields: ['id', 'displayName', 'picture.type(large)', 'emails']
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const { id, displayName, photos, emails } = profile

      let res = await axios.get(`${USER_MANAGER_ADDRESS}/linkedAccounts/facebook/${id}`)
      let user = res.data

      if (!user) {
        user = {
          name: displayName,
          avatar: photos[0].value,
          email: emails[0].value,
          linkedAccounts: { facebook: id }
        }
        res = await axios.post(USER_MANAGER_ADDRESS, user)
        if (res.status !== 200) throw new Error('Cannot create new user')
        user._id = res.data._id
      }

      const token = jwt.sign({ id: user._id }, JWT_SECRET)
      return done(null, user, token)
    } catch (err) {
      return done(err)
    }
  }
)

const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
  },
  async (jwtPayload, done) => {
    try {
      const res = await axios.get(`${USER_MANAGER_ADDRESS}/${jwtPayload.id}`)
      const user = res.data
      return done(null, user)
    } catch (err) {
      return done(err)
    }
  }
)

module.exports = { facebookStrategy, jwtStrategy }
