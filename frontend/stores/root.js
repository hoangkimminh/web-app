import UserStore from './user'
import WatchListStore from './watch-list'

class RootStore {
  constructor() {
    this.userStore = new UserStore(this)
    this.watchListStore = new WatchListStore(this)
  }
}

export default RootStore
