import { useEffect, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import { userStoreContext } from '../../stores/user'

const SideBar = observer(() => {
  const userStore = useContext(userStoreContext)

  useEffect(() => {
    userStore.fetchUser()
  })

  return (
    <section className='section has-background-light'>
      <div className='avatar is-flex'>
        <figure className='image is-128x128'>
          <img className='is-rounded' src={userStore.avatar} />
        </figure>
      </div>
      <h6 className='title is-6 has-text-centered'>
        {userStore.name}&nbsp;&nbsp;&nbsp;
        <span className='tag is-rounded is-dark'>{userStore.privilege}</span>
      </h6>

      <p className='menu-label'>NOTIFICATIONS</p>
      <ul className='menu-list'></ul>

      <p className='menu-label'>WATCHES</p>
      <ul className='menu-list'>
        <li>
          <Link href='/dashboard/[entry]/[subentry]' as='/dashboard/watch/manage'>
            <a>
              <span className='icon'>
                <ion-icon name='eye' />
              </span>
              <span>&nbsp;Manage watches</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/[entry]/[subentry]' as='/dashboard/watch/analytics'>
            <a>
              <span className='icon'>
                <ion-icon name='analytics' />
              </span>
              <span>&nbsp;Analytics</span>
            </a>
          </Link>
        </li>
      </ul>

      <p className='menu-label'>ACCOUNT</p>
      <ul className='menu-list'>
        <li>
          <Link href='/dashboard/[entry]/[subentry]' as='/dashboard/account/profile'>
            <a>
              <span className='icon'>
                <ion-icon name='person' />
              </span>
              <span>&nbsp;Profile</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/[entry]/[subentry]' as='/dashboard/account/settings'>
            <a>
              <span className='icon'>
                <ion-icon name='settings' />
              </span>
              <span>&nbsp;Settings</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/logout'>
            <a className='has-text-danger'>
              <span className='icon'>
                <ion-icon name='log-out' />
              </span>
              <span>&nbsp;Logout</span>
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        section {
          height: 100%;
        }
        .avatar {
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .tag {
          font-weight: normal;
        }
        li > a > span {
          vertical-align: middle;
        }
      `}</style>
    </section>
  )
})

export default SideBar
