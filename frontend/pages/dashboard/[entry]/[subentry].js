import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import CreateWatchForm from '../../../components/forms/create-watch'
import ActionBar from '../../../components/layouts/action-bar'
import Layout from '../../../components/layouts/layout'
import SideBar from '../../../components/layouts/side-bar'
import MessengerPopup from '../../../components/messenger-popup'
import WatchCard from '../../../components/watch/card'
import { userStoreContext } from '../../../stores/user'

const CreateWatch = () => <CreateWatchForm />

const ManageWatches = () => {
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
        />
      ))}
    </div>
  )
}

const Dashboard = () => {
  const router = useRouter()
  const { entry, subentry } = router.query
  let main
  if (entry === 'watch' && subentry === 'create') main = <CreateWatch />
  else if (entry === 'watch' && subentry === 'manage') main = <ManageWatches />
  else if (entry === 'watch' && subentry === 'analytics') main = null
  else if (entry === 'account' && subentry === 'profile') main = null
  else if (entry === 'account' && subentry === 'settings') main = null
  else main = <ManageWatches />

  return (
    <Layout left={<SideBar />}>
      <section className='section'>
        <ActionBar />
        <MessengerPopup />
        {main}
      </section>
      <style jsx>{`
        section {
          padding: 3rem;
        }
      `}</style>
    </Layout>
  )
}

export default Dashboard
