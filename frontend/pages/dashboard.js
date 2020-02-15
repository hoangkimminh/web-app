import { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import Layout from '../components/layouts/layout'
import Sidebar from '../components/layouts/side-bar'
import WatchCard from '../components/watch-card'
import MessengerPopup from '../components/messenger-popup'
import { LinkedButton } from '../components/buttons'
import { userStoreContext } from '../stores/user'

const Dashboard = () => {
  const [watchList, setWatchList] = useState([])

  const userStore = useContext(userStoreContext)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('api/watch-manager/users/' + userStore.id)
      const data = res.data
      setWatchList(data)
    }
    fetchData()
  }, [])

  const watchListCard =
    Array.isArray(watchList) &&
    watchList.map((watch, i) => {
      return (
        <WatchCard
          key={i}
          _id={watch._id}
          url={watch.url}
          interval={watch.interval}
          active={watch.active}
          targets={watch.targets}
        />
      )
    })

  return (
    <Layout left={<Sidebar />}>
      <section className='section'>
        <div className='field'>
          <div className='control'>
            <LinkedButton className='button is-primary' href='/new-watch'>
              <ion-icon name='add-circle-outline' />
              <span>&nbsp;</span>
              New watch
            </LinkedButton>
          </div>
        </div>
        <MessengerPopup />
        {watchListCard}
      </section>
      <style jsx>{`
        .field {
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Dashboard
