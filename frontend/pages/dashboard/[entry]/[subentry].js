import { useRouter } from 'next/router'
import CreateWatchView from '../../../components/views/CreateWatchView'
import ManageWatchesView from '../../../components/views/ManageWatchesView'
import ProfileView from '../../../components/views/ProfileView'
import ActionBar from '../../../components/layouts/action-bar'
import Layout from '../../../components/layouts/layout'
import SideBar from '../../../components/layouts/side-bar'
import MessengerPopup from '../../../components/messenger-popup'

const Dashboard = () => {
  const router = useRouter()
  const { entry, subentry } = router.query
  let main
  if (entry === 'watch' && subentry === 'create') main = <CreateWatchView />
  else if (entry === 'watch' && subentry === 'manage') main = <ManageWatchesView />
  else if (entry === 'watch' && subentry === 'analytics') main = null
  else if (entry === 'account' && subentry === 'profile') main = <ProfileView />
  else if (entry === 'account' && subentry === 'settings') main = null
  else main = <ManageWatchesView />

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
