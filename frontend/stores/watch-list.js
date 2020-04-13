import { observable, action } from 'mobx'
import axios from 'axios'

class WatchListStore {
  @observable watches = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action
  async fetch(userId) {
    try {
      const response = await axios.get('/api/watch-manager/users/' + userId)
      if (response.status === 200) {
        this.watches = response.data
      }
    } catch (error) {
      console.error(error)
    }
  }

  get(_id) {
    return this.watches.find((watch) => watch._id === _id)
  }

  @action
  async toggleStatus(_id) {
    try {
      const watch = await this.get(_id)
      const newStatus = watch.active ? 'inactive' : 'active'
      const res = await axios.put('/api/watch-manager/' + _id + '/status/' + newStatus)
      if (res.status === 204) {
        watch.active = !watch.active
      }
    } catch (error) {
      console.error(error)
    }
  }

  
}

export default WatchListStore
