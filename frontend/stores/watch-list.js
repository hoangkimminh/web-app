import axios from 'axios'
import { action, observable } from 'mobx'

class WatchListStore {
  @observable watches = []

  axios = axios.create({
    timeout: 10 * 1000,
    validateStatus: null, // always resolve HTTP response promises
  })

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action
  async fetch(userId) {
    try {
      const res = await this.axios.get('/api/watch-manager/users/' + userId)
      if (res.status >= 200 && res.status < 300) this.watches = res.data
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
      const watch = this.get(_id)
      const newStatus = watch.active ? 'inactive' : 'active'
      const res = await axios.put('/api/watch-manager/' + _id + '/status/' + newStatus)
      if (res.status >= 200 && res.status < 300) watch.active = !watch.active
    } catch (error) {
      console.error(error)
    }
  }
}

export default WatchListStore
