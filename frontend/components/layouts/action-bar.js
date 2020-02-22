import Link from 'next/link'
import { useRouter } from 'next/router'
import { LinkedButton } from '../common/buttons'

const Breadcrumb = () => {
  const router = useRouter()
  const { entry = 'watch', subentry = 'manage' } = router.query

  return (
    <nav className='breadcrumb has-bullet-separator is-marginless'>
      <ul>
        <li>
          <Link href='/dashboard'>
            <a>dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/[entry]' as={`/dashboard/${entry}`}>
            <a>{entry}</a>
          </Link>
        </li>
        <li className='is-active'>
          <Link
            href='/dashboard/[entry]/[subentry]'
            as={`/dashboard/${entry}/${subentry}`}
          >
            <a>{subentry}</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        a {
          text-transform: uppercase;
        }
      `}</style>
    </nav>
  )
}

const CreateWatchButton = () => {
  return (
    <LinkedButton
      className='button is-link'
      href='/dashboard/[entry]/[subentry]'
      as='/dashboard/watch/create'
    >
      <ion-icon name='add-circle' />
      <span>&nbsp;</span>
      New watch
    </LinkedButton>
  )
}

const ActionBar = () => {
  const router = useRouter()
  const { entry = 'watch' } = router.query

  return (
    <div className='box is-flex has-background-light is-shadowless'>
      <Breadcrumb />
      {entry === 'watch' && <CreateWatchButton />}
      <style jsx>{`
        .box {
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  )
}

export default ActionBar
