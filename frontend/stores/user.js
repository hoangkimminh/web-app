import axios from 'axios'
import { observable } from 'mobx'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

class UserStore {
  @observable id = cookies.get('userID')
  @observable username = ''
  @observable profile = {
    firstName: '',
    lastName: '',
    avatar: '',
    gender: '',
    birthday: '',
  }
  @observable email = ''
  @observable linkedAccounts = { facebook: '', messenger: '', google: '' }
  @observable privilege = ''
  @observable createdAt = ''
  @observable updatedAt = ''

  axios = axios.create({
    timeout: 10 * 1000,
    validateStatus: null, // always resolve HTTP response promises
  })

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  async fetch() {
    try {
      const res = await this.axios.get('/api/user-manager/' + this.id)
      if (res.status >= 200 && res.status < 300) Object.assign(this, res.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export default UserStore
