import { observable } from 'mobx'
import { createContext } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

class UserStore {
  @observable id = cookies.get('userID')
  @observable name = ''
  @observable username = ''
  @observable profile = {firstName: '', lastName: '', avatar: '', gender: '', birthday: ''}
  @observable email = ''
  @observable linkedAccounts = { facebook: '', messenger: '', google: '' }
  @observable privilege = ''
  @observable createdAt = ''
  @observable updatedAt = ''

  async fetchUser() {
    try {
      const response = await axios.get('/api/user-manager/' + this.id)
      if (response.status === 200) {
        const user = response.data
        this.name = user.name
        this.username = user.username
        this.profile = user.profile
        this.email = user.email
        this.linkedAccounts = user.linkedAccounts
        this.privilege = user.privilege
        this.createdAt = user.createdAt
        this.updatedAt = user.updatedAt
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const userStoreContext = createContext(new UserStore())
