import { useState, useEffect } from 'react'
import Link from 'next/link'

import DashboardLayout from '../components/dashboard-layout'

const Dashboard = () => {
  const [watches, setWatches] = useState([])

  useEffect(async () => {
    async function fetchWatches() {
      const res = await fetch('/api/scheduler/watches')
      const data = await res.json()
      await setWatches(data)
      console.log(data)
    }
    fetchWatches()
  }, [])

  return (
    <DashboardLayout>
      <div className='section' style={{ paddingTop: '1em', paddingBottom: '0em' }}>
        <div className='card' style={{ display: 'flex' }}>
          <p className='card-header-title is-size-4'>MY WATCHES</p>
          <div
            className='add-button'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingRight: '1em'
            }}
          >
            <Link href='/new-watch'>
              <a className='button is-primay'>
                <span className='icon'>
                  <ion-icon name='add-circle-outline'></ion-icon>
                </span>{' '}
                <span>Add new watch</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='section'>
        <WatchCard id='5e16e468a95f9d4307618633'></WatchCard>
        <br />
      </div>
    </DashboardLayout>
  )
}

const WatchCard = (props) => {
  useEffect(async () => {
    async function fetchWatchInfo(id) {
      const res = await fetch('/api/watch-manager/get/' + id)
      const data = await res.json()
      console.log(data)
    }
    await fetchWatchInfo(props.id)
  }, [props.id])
  return (
    <div className='card'>
      <div className='card-header'>
        <p className='card-header-title'>
          <span>URL: </span>
          <span>
            <a
              href='https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039'
              target='_blank'
            >
              https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039
            </a>
          </span>
        </p>
      </div>
      <div className='card-content'>
        <div className='content'>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Interval: </span>
            <span>9000{' seconds'}</span>
          </div>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Create at: </span>
            <span>20:18 10/01/2020</span>
          </div>
          <div className='card-field'>
            <span className='has-text-weight-bold'>List products: </span>
          </div>
          <div className='card-field'>
            <table className='table is-hoverable'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Iphone 11 Pro Max</td>
                  <td>28000000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='buttons'>
          <button className='button is-primary'>
            <span className='icon'>
              <ion-icon name='create'></ion-icon>
            </span>
            <span>Edit</span>
          </button>
          <button className='button is-danger'>
            <span className='icon'>
              <ion-icon name='trash'></ion-icon>
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
      <footer></footer>
    </div>
  )
}

export default Dashboard
