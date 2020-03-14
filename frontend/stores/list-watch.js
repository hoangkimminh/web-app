import { observable, action, runInAction } from 'mobx'
import { createContext } from 'react'
import axios from 'axios'

import Watch from './watch'

class ListWatchStore {
  @observable watches = []

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

  set watches(watchesData) {
    this.watches = watchesData.map((watch) => {
      const { _id, url, interval, active, targets, checkedAt } = watch
      return new Watch(_id, url, interval, active, targets, checkedAt)
    })
  }

  @action
  async changeWatchStatusById(_id) {
    const watch = await this.watches.filter((watch) => watch._id === _id)[0]
    console.log(watch)
    runInAction(() => {
      watch.changeWatchStatus()
    })
  }
}

export const listWatchStoreContext = createContext(new ListWatchStore())
