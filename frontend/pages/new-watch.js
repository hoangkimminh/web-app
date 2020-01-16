import WatchRegisteringForm from '../components/watch-registering/form'

import Sidebar from '../components/sidebar'
import Layout from '../components/layout'

const AddWatch = () => (
  <Layout left={<Sidebar />}>
    <div className='section is-flex'>
      <WatchRegisteringBox />
      <style jsx>{`
        justify-content: center;
      `}</style>
    </div>
  </Layout>
)

const WatchRegisteringBox = () => (
  <div className='box is-flex'>
    <h3 className='title is-3'>WATCH REGISTERING</h3>
    <WatchRegisteringForm />
    <style jsx>{`
      align-items: center;
      flex-direction: column;
    `}</style>
  </div>
)

export default AddWatch
