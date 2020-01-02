const FacebookStrategy = require('passport-facebook').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwt = require('jsonwebtoken')
const axios = require('axios')

const { FB_APP_ID, FB_APP_SECRET, USER_MANAGER_ADDRESS, JWT_SECRET } = process.env

const facebookStrategy = new FacebookStrategy(
  {
    clientID: FB_APP_ID,
    clientSecret: FB_APP_SECRET,
    callbackURL: '/auth/facebook/cb',
    profileFields: ['email', 'name']
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const getUserUrl =
        USER_MANAGER_ADDRESS + '/users/linkedAccounts/facebook/' + profile._json.id
      const userResponse = await axios.get(getUserUrl)
      let user = userResponse.data
      if (!user) {
        const createUserUrl = USER_MANAGER_ADDRESS + '/users'
        user = {
          username: '',
          name: profile._json.name,
          email: profile._json.email,
          birthday: profile._json.birthday,
          linkedAccounts: {
            facebook: profile._json.id
          }
        }
        const response = await axios.post(createUserUrl, user)
        if (response.status == 200) {
          user._id = response.data._id
        } else return done('can not create user')
      }
      const jwtPayload = {
        id: user._id
      }
      const token = jwt.sign(jwtPayload, JWT_SECRET)
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
      const getUserUrl = USER_MANAGER_ADDRESS + '/users/' + jwtPayload.id
      const userResponse = await axios.get(getUserUrl)
      const user = userResponse.data
      if (user != null) return done(null, user)
      return done(null, false)
    } catch (err) {
      return done(err)
    }
  }
)

module.exports = {
  facebookStrategy,
  jwtStrategy
}
