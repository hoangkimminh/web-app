import { useContext, useState } from 'react'

import Layout from '../components/layouts/layout'
import Sidebar from '../components/layouts/side-bar'
import {
  General,
  PersonalInformation,
  LinkedAccounts,
  Security,
  SubmitFormField
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
        <SubmitFormField
          userStore={userStore}
          isReadOnly={isReadOnly}
          setReadOnly={setReadOnly}
        />
      </form>
    </Layout>
  )
}

export default Profile
