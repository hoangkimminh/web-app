import { useState, useEffect } from 'react'
import Link from 'next/link'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import {secondsToHumanTime} from '../utils/index'

const Dashboard = () => {
  const [watches, setWatches] = useState([])

  useEffect(() => {
    async function fetchWatches() {
      const res = await fetch('/api/scheduler/watches')
      const data = await res.json()
      await setWatches(data)
      console.log(data)
    }
    fetchWatches()
  }, [])

  return (
    <Layout left={<Sidebar />}>
      <div className='main'>
        <div className='header'>
          <p className='card-header-title is-size-4'>MY WATCHES</p>
          <div className='add-button'>
            <Link href='/new-watch'>
              <a className='button is-primary'>
                <span className='icon'>
                  <ion-icon name='add-circle-outline'></ion-icon>
                </span>{' '}
                <span>Add new watch</span>
              </a>
            </Link>
          </div>
        </div>
        <div className='section'>
          <WatchCard id='5e16e468a95f9d4307618633'></WatchCard>
          <br />
        </div>
        <style jsx>{`
        .header {
          padding: 1rem;
          display: flex;
        }
        .add-button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 1em;
        }
      `}</style>
      </div>
    </Layout>
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
    <div className='box'>
      <div className='card-content'>
        <div className='content'>
          <div className='card-field'>
            <span className='has-text-weight-bold'>URL: </span>
            <span>
              <a
                href='https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039'
                target='_blank'
              >
                https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039
              </a>
            </span>
            <hr />
          </div>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Active:&nbsp;</span>
            <input
              id='switchRoundedDefault'
              type='checkbox'
              name='switchRoundedDefault'
              class='switch is-rounded'
            />
            <label for='switchRoundedDefault'> </label>
          </div>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Interval: </span>
            <span>{secondsToHumanTime(9000)}</span>
          </div>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Targets: </span>
          </div>
          <div className='card-field'>
            <table className='table is-hoverable'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>CSS Selector</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Iphone 11 Pro Max</td>
                  <td>h1</td>
                  <td>28000000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class='card-field'>
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
      </div>
    </div>
  )
}

export default Dashboard
