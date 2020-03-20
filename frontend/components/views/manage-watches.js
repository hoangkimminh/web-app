import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { userStoreContext } from '../../stores/user'
import { watchListStoreContext } from '../../stores/watch-list'

import WatchCard from '../watch/card'

const ManageWatchesView = observer(() => {
  const userStore = useContext(userStoreContext)
  const watchListStore = useContext(watchListStoreContext)

  useEffect(() => {
    watchListStore.fetch(userStore.id)
  }, [])

  return (
    <div>
      {watchListStore.watches.map((watch, i) => (
        <WatchCard
          key={i}
          _id={watch._id}
          url={watch.url}
          interval={watch.interval}
          active={watch.active}
          targets={watch.targets}
          checkedAt={watch.checkedAt}
        />
      ))}
    </div>
  )
})

export default ManageWatchesView
