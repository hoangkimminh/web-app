import { observable } from 'mobx'
import axios from 'axios'
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
    birthday: ''
  }
  @observable email = ''
  @observable linkedAccounts = { facebook: '', messenger: '', google: '' }
  @observable privilege = ''
  @observable createdAt = ''
  @observable updatedAt = ''

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  async fetchUser() {
    try {
      const response = await axios.get('/api/user-manager/' + this.id)
      const user = response.data
      this.username = user.username
      this.profile = user.profile
      this.email = user.email
      this.linkedAccounts = user.linkedAccounts
      this.privilege = user.privilege
      this.createdAt = user.createdAt
      this.updatedAt = user.updatedAt
    } catch (error) {
      console.error(error)
    }
  }
}

export default UserStore
