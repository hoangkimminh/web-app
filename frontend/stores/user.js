import { observable } from 'mobx'
import { createContext } from 'react'
import axios from 'axios'

import { getCurrentUser } from '../utils'

class UserStore {
  @observable id = getCurrentUser().id
  @observable name = ''
  @observable avatar = ''
  @observable email = ''

  async fetchUser() {
    try {
      const response = await axios.get('/api/user-manager/' + this.id)
      if (response.status === 200) {
        const user = response.data
        this.name = user.name
        this.avatar = user.avatar
        this.email = user.email
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const userStoreContext = createContext(new UserStore())
