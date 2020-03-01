import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { userStoreContext } from '../../stores/user'

import WatchCard from '../watch/card'

const ManageWatchesView = () => {
  const [watchList, setWatchList] = useState([])
  const userStore = useContext(userStoreContext)
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('api/watch-manager/users/' + userStore.id)
      const watches = res.data
      if (watches.length) setWatchList(watches)
    }
    fetchData()
  }, [])

  return (
    <div>
      {watchList.map((watch, i) => (
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
}

export default ManageWatchesView
