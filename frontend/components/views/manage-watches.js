import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { userStoreContext } from '../../stores/user'
import { listWatchStoreContext } from '../../stores/list-watch'

import WatchCard from '../watch/card'

const ManageWatchesView = observer(() => {
  const [watchList, setWatchList] = useState([])

  const userStore = useContext(userStoreContext)
  const listWatchStore = useContext(listWatchStoreContext)

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await axios.get('/api/watch-manager/users/' + userStore.id)
    //   const watches = res.data
    //   if (watches.length) setWatchList(watches)
    // }
    // fetchData()
    listWatchStore.fetchWatches(userStore.id)
  }, [])

  return (
    <div>
      {listWatchStore.watches.map((watch, i) => (
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
