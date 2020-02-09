import { observable } from 'mobx'
import { createContext } from 'react'
import axios from 'axios'

import {getCurrentUser} from '../utils'

class UserStore {
  @observable id = getCurrentUser().id
  @observable name = ''
  @observable avatar = ''
  @observable email = ''

  async fetchUser() {
    const response = await axios.get('/api/user-manager/' + this.id)
    const user = response.data
    this.name = user.name
    this.avatar = user.avatar
    this.email = user.email
  }
}

export const userStoreContext = createContext(new UserStore())
