import { observable } from 'mobx'
import { createContext } from 'react'
import axios from 'axios'

import { getCurrentUser } from '../utils'

class UserStore {
  @observable id = getCurrentUser().id
  @observable name = ''
  @observable username = ''
  @observable avatar = ''
  @observable email = ''
  @observable birthday = ''
  @observable linkedAccounts = { facebook: '', messenger: '', google: '' }
  @observable privilege = ''
  @observable createAt = ''
  @observable updatedAt = ''

  async fetchUser() {
    try {
      const response = await axios.get('/api/user-manager/' + this.id)
      if (response.status === 200) {
        const user = response.data
        this.name = user.name
        this.username = user.username
        this.avatar = user.avatar
        this.email = user.email
        this.birthday = user.birthday
        this.linkedAccounts = user.linkedAccounts
        this.privilege = user.privilege
        this.createAt = user.createAt
        this.updatedAt = user.updatedAt
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const userStoreContext = createContext(new UserStore())
