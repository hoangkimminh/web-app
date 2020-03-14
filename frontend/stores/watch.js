import { observable, action, runInAction } from 'mobx'
import axios from 'axios'

class Watch {
  @observable _id = ''
  @observable url = ''
  @observable interval = null
  @observable active = false
  @observable targets = []
  @observable checkedAt = ''

  constructor(_id, url, interval, active, targets, checkedAt) {
    this._id = _id
    this.url = url
    this.interval = interval
    this.active = active
    this.targets = targets
    this.checkedAt = checkedAt
  }

  @action.bound
  async changeWatchStatus() {
    try {
      const toggleActive = active ? 'inactive' : 'active'
      const res = await axios.put('/api/watch-manager/' + _id + '/status/' + toggleActive)
      if (res.status === 204) {
        runInAction(() => {
          this.active = !this.active
          return true
        })
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }

  set active(active) {
    this.active = active
  }
}

export default Watch
