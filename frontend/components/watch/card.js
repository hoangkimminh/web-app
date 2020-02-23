import { useState } from 'react'
import axios from 'axios'

import { secondsToHumanTime } from '../../utils'

const WatchCard = (props) => {
  const { url, _id, interval, targets, updatedAt } = props

  const [active, setActive] = useState(props.active)

  const onChangeStatus = async () => {
    try {
      const toggleActive = active ? 'inactive' : 'active'
      const res = await axios.put(
        '/api/watch-manager/' + props._id + '/status/' + toggleActive
      )
      if (res.status === 204) {
        await setActive(!active)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='card'>
      <header className='card-header has-background-white-bis'>
        <p className='card-header-title'>
          <a href={url} target='_blank'>
            {url}
          </a>
        </p>
        <div className='card-header-icon is-flex'>
          <div>
            <input
              id={'switchActive' + _id}
              type='checkbox'
              name={'switchActive' + _id}
              className='switch is-rounded'
              checked={active}
              onChange={onChangeStatus}
            />
            <label htmlFor={'switchActive' + _id}> </label>
          </div>
        </div>
        <div className='card-header-icon is-paddingless has-text-primary is-flex'>
          <span className='icon is-large'>
            <ion-icon name='create' />
          </span>
        </div>
        <div className='card-header-icon is-paddingless has-text-danger is-flex'>
          <span className='icon is-large'>
            <ion-icon name='close' />
          </span>
        </div>
      </header>
      <div className='card-content'>
        <div className='content'>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Interval: </span>
            <span>{secondsToHumanTime(interval)}</span>
          </div>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Targets: </span>
            <span>{targets.length}</span>
          </div>
          <div className='columns is-gapless'>
            <div className='column is-6 card-field'>
              <span className='has-text-weight-bold'>Last check: </span>
              <span>NULL</span>
            </div>
            <div className='column is-6 card-field'>
              <span className='has-text-weight-bold'>Last update: </span>
              <span>{updatedAt}</span>
            </div>
          </div>
          <hr />
          <div className='card-field'>
            <table className='table is-hoverable'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(targets) &&
                  targets.map((target, i) => {
                    return (
                      <tr key={i}>
                        <td>{target.name}</td>
                        <td>{target.data ? target.data : 'NULL'}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          margin-bottom: 2rem;
          border-radius: 0.5rem !important;
        }
        .card-header-icon {
          justify-content: center;
          align-items: center;
        }
        @media screen and (max-width: 738px) {
          .card-header-title {
            width: 100px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  )
}

export default WatchCard
