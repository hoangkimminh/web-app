import { observable, action } from 'mobx'
import axios from 'axios'

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
      const response = await axios.get('/api/watch-manager/users/' + userId)
      if (response.status >= 200 && response.status < 300) {
        const templates = await this.getTemplates()
        const watchList = await response.data.map((watch) => {
          const template = templates.find((value) => value._id === watch.templateID)
          return { ...watch, templateName: template ? template.name : null }
        })
        this.watches = watchList
      }
    } catch (error) {
      console.error(error)
    }
  }

  async getTemplates() {
    try {
      const response = await axios.get('/api/watch-manager/templates')
      if (response.data) {
        return response.data
      } else {
        return null
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
