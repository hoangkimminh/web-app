const { Strategy: FacebookStrategy } = require('passport-facebook')
const { Strategy: JwtStrategy } = require('passport-jwt')
const axios = require('axios')

const { FB_APP_ID, FB_APP_SECRET, JWT_SECRET, USER_MANAGER_ADDRESS } = process.env

const facebookStrategy = new FacebookStrategy(
  {
    clientID: FB_APP_ID,
    clientSecret: FB_APP_SECRET,
    callbackURL: '/api/auth-service/facebook/cb',
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
        if (res.status !== 200) throw new Error('Cannot create a new user')
        user._id = res.data._id
      }

      return done(null, user)
    } catch (err) {
      return done(err)
    }
  }
)

const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: (req) => req.cookies['jwt'],
    secretOrKey: JWT_SECRET
  },
  async (jwtPayload, done) => {
    try {
      const res = await axios.get(`${USER_MANAGER_ADDRESS}/${jwtPayload.userID}`)
      const user = res.data
      return done(null, user)
    } catch (err) {
      return done(err)
    }
  }
)

module.exports = { facebookStrategy, jwtStrategy }
