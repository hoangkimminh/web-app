import { useContext, useState } from 'react'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import {
  General,
  PersonalInformation,
  LinkedAccounts,
  Security
} from '../components/forms/profile'
import { userStoreContext } from '../stores/user'

const Profile = () => {
  const userStore = useContext(userStoreContext)

  const [isReadOnly, setReadOnly] = useState(true)

  return (
    <Layout left={<Sidebar />}>
      <form>
        <General userStore={userStore} />
        <PersonalInformation userStore={userStore} isReadOnly={isReadOnly} />
        <LinkedAccounts userStore={userStore} isReadOnly={isReadOnly} />
        {!isReadOnly && <Security />}
        
        {isReadOnly && (
          /* Edit button */
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'></label>
            </div>
            <div className='field-body'>
              <p className='control'>
                <button
                  className='button is-primary'
                  onClick={(e) => {
                    e.preventDefault()
                    setReadOnly(false)
                  }}
                >
                  <span className='icon'>
                    <ion-icon name='create' />
                  </span>
                  <span>Edit</span>
                </button>
              </p>
            </div>
          </div>
        )}
        {!isReadOnly && (
          /* Submit field */
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'></label>
            </div>
            <div className='field-body is-grouped'>
              <button className='button is-primary'>
                <span className='icon'>
                  <ion-icon name='checkmark' />
                </span>
                <span>Save changes</span>
              </button>
              <button
                className='button is-light'
                onClick={(e) => {
                  e.preventDefault()
                  setReadOnly(true)
                }}
              >
                <span className='icon'>
                  <ion-icon name='close' />
                </span>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </Layout>
  )
}

export default Profile
