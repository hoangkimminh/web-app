import { observable, action } from 'mobx'
import { createContext } from 'react'
import axios from 'axios'

class ListWatchStore {
  @observable watches = []

  @action
  async fetchWatches(userId) {
    try {
      const response = await axios.get('/api/watch-manager/users/' + userId)
      if (response.status === 200) {
        this.watches = response.data
      }
    } catch (error) {
      console.error(error)
    }
  }

  getWatchById(_id) {
    return this.watches.find(watch => watch._id === _id)
  }

  @action
  async changeWatchStatusById(_id) {
    try {
      const watch = await this.getWatchById(_id)
      const toggleActive = watch.active ? 'inactive' : 'active'
      const res = await axios.put('/api/watch-manager/' + _id + '/status/' + toggleActive)
      if (res.status === 204) {
        watch.active = !watch.active
        return true
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export const listWatchStoreContext = createContext(new ListWatchStore())
