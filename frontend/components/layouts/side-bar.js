import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { userStoreContext } from '../../stores/user'

const UserInfo = observer(() => {
  const userStore = useContext(userStoreContext)
  useEffect(() => {
    userStore.fetchUser()
  })

  return (
    <div className='is-flex'>
      <figure className='image is-128x128'>
        <img className='is-rounded' src={userStore.avatar} />
      </figure>
      <p className='is-flex'>
        <h6 className='title is-6 is-marginless'>{userStore.name}</h6>
        <span className='tag is-rounded is-dark'>{userStore.privilege}</span>
      </p>
      <style jsx>{`
        div {
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }
        figure {
          margin-bottom: 1rem;
        }
        p {
          align-self: stretch;
          align-items: baseline;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
})

const Menu = () => {
  const router = useRouter()
  const { subentry = 'manage' } = router.query

  return (
    <div>
      <p className='menu-label'>NOTIFICATIONS</p>
      <ul className='menu-list'></ul>
      <p className='menu-label'>WATCHES</p>
      <ul className='menu-list'>
        <li>
          <Link href='/dashboard/[entry]/[subentry]' as='/dashboard/watch/manage'>
            <a className={subentry === 'manage' && 'is-active'}>
              <span className='icon'>
                <ion-icon name='eye' />
              </span>
              <span>&nbsp;Manage watches</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/[entry]/[subentry]' as='/dashboard/watch/analytics'>
            <a className={subentry === 'analytics' && 'is-active'}>
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
            <a className={subentry === 'profile' && 'is-active'}>
              <span className='icon'>
                <ion-icon name='person' />
              </span>
              <span>&nbsp;Profile</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/[entry]/[subentry]' as='/dashboard/account/settings'>
            <a className={subentry === 'settings' && 'is-active'}>
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
        div {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  )
}

const Brand = () => {
  return (
    <div>
      <figure className='image is-48x48'>
        <Link href='/'>
          <a>
            <img src='/static/logo-night-watch.svg' />
          </a>
        </Link>
      </figure>
    </div>
  )
}

const SideBar = () => {
  return (
    <section className='section has-background-light'>
      <UserInfo />
      <Menu />
      <Brand />
      <style jsx>{`
        section {
          height: 100%;
        }
      `}</style>
    </section>
  )
}

export default SideBar
