import WatchRegisteringForm from '../components/watch-registering/form'

import DashboardLayout from '../components/dashboard-layout'

const AddWatch = () => (
  <DashboardLayout>
    <div className='section is-flex'>
      <WatchRegisteringBox />
      <style jsx>{`
        justify-content: center;
      `}</style>
    </div>
  </DashboardLayout>
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
