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
    }
    fetchWatches()
    console.log(watches)
  }, [])

  return (
    <DashboardLayout>
      <div className='section'>
        <div className='card' style={{ display: 'flex' }}>
          <p className='card-header-title is-size-3'>MY WATCHES</p>
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
        <div className='card'>
          <div className='card-header'>
            <p className='card-header-title'>
              URL:{' '}
              <a
                href='https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039'
                target='_blank'
              >
                https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039
              </a>
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
              {/* <div className='card-field columns'>
                        <div className="column is-8">
                            Iphone 11 Pro Max
                        </div>
                        <div className="column is-4">
                            28000000
                        </div>
                    </div> */}
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
              <button className='button is-primary'>Edit</button>
              <button className='button is-danger'>Delete</button>
            </div>
          </div>
          <footer></footer>
        </div>
        <br />
        <div className='card'>
          <div className='card-header'>
            <p className='card-header-title'>
              URL:{' '}
              <a
                href='https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039'
                target='_blank'
              >
                https://shopee.vn/Th%C3%B9ng-bia-Tiger-24-lon-330ml-lon-i.98128945.1608411039
              </a>
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
              {/* <div className='card-field columns'>
                        <div className="column is-8">
                            Iphone 11 Pro Max
                        </div>
                        <div className="column is-4">
                            28000000
                        </div>
                    </div> */}
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
              <button className='button is-primary'>Edit</button>
              <button className='button is-danger'>Delete</button>
            </div>
          </div>
          <footer></footer>
        </div>
        <br />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
