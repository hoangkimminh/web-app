import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const currentUser = {
  id: cookies.get('userID'),
  jwt: cookies.get('jwt')
}

export default currentUser
