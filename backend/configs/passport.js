const { Strategy: FacebookStrategy } = require('passport-facebook')
const { Strategy: JwtStrategy } = require('passport-jwt')
const axios = require('axios')

const {
  PORT,
  HOST = `http://localhost:${PORT}`,
  FB_APP_ID,
  FB_APP_SECRET,
  JWT_SECRET,
  USER_MANAGER_ADDRESS
} = process.env

const facebookStrategy = new FacebookStrategy(
  {
    clientID: FB_APP_ID,
    clientSecret: FB_APP_SECRET,
    callbackURL: `${HOST}/api/auth-service/facebook/cb`,
    profileFields: ['id', 'name', 'picture.type(large)', 'emails']
  },
  async (accessToken, refreshToken, profile, done) => {
    const { id, name, photos, emails } = profile
    let res
    try {
      res = await axios.get(`${USER_MANAGER_ADDRESS}/linkedAccounts/facebook/${id}`)
      return done(null, res.data)
    } catch (err) {
      res = err.response
      if (res.status == 404) {
        try {
          res = await axios.post(USER_MANAGER_ADDRESS, {
            email: emails[0].value,
            profile: {
              firstName: name.givenName,
              lastName: name.familyName,
              avatar: photos[0].value
            },
            linkedAccounts: { facebook: id }
          })
          return done(null, res.data)
        } catch (err) {
          return done(new Error('Cannot create new user'))
        }
      }
      return done(new Error('Cannot fetch user information'))
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
