import { observable } from 'mobx'
import { createContext } from 'react'
import axios from 'axios'

import { getCurrentUser } from '../utils'

class UserStore {
  @observable id = getCurrentUser().id
  @observable name = ''
<<<<<<< HEAD
  @observable username = ''
  @observable avatar = ''
  @observable email = ''
  @observable birthday = ''
  @observable linkedAccounts = { facebook: '', messenger: '', google: '' }
  @observable privilege = ''
  @observable createAt = ''
  @observable updatedAt = ''
=======
  @observable avatar = ''
  @observable email = ''
>>>>>>> 527104493bf1c3af0c13b509f4d6ecc2a5de875a

  async fetchUser() {
    try {
      const response = await axios.get('/api/user-manager/' + this.id)
      if (response.status === 200) {
        const user = response.data
        this.name = user.name
<<<<<<< HEAD
        this.username = user.username
        this.avatar = user.avatar
        this.email = user.email
        this.birthday = user.birthday
        this.linkedAccounts = user.linkedAccounts
        this.privilege = user.privilege
        this.createAt = user.createAt
        this.updatedAt = user.updatedAt
=======
        this.avatar = user.avatar
        this.email = user.email
>>>>>>> 527104493bf1c3af0c13b509f4d6ecc2a5de875a
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const userStoreContext = createContext(new UserStore())
