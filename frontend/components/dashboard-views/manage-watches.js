import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useStores } from '../../hooks'
import WatchCard from '../watch-card'

const ManageWatchesView = observer(() => {
  const { userStore, watchListStore } = useStores()

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
          templateName={watch.templateName}
        />
      ))}
    </div>
  )
})

export default ManageWatchesView
