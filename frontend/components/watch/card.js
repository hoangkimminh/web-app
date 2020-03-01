import { useState } from 'react'
import axios from 'axios'
import TruncateMarkup from 'react-truncate-markup'

import { secondsToHumanTime } from '../../utils'

const WatchCard = (props) => {
  const { url, _id, interval, targets, updatedAt, checkedAt } = props

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

  const getLastUpdatedAt = () => {
    let listUpdatedAt = targets.map((target) => target.updatedAt)
    listUpdatedAt.sort()
    const lastUpdatedAt = listUpdatedAt[listUpdatedAt.length - 1]
    return lastUpdatedAt ? lastUpdatedAt : 'NULL' 
  }

  return (
    <div className='card'>
      <header className='card-header has-background-light'>
        <TruncateMarkup lines={2}>
          <p className='card-header-title'>
            <a className='url' href={url} target='_blank'>
              {url}
            </a>
          </p>
        </TruncateMarkup>

        <div className='card-header-icon'>
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
        <div className='card-header-icon is-paddingless has-text-primary'>
          <span className='icon is-large'>
            <ion-icon name='create' />
          </span>
        </div>
        <div className='card-header-icon is-paddingless has-text-danger'>
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
              <span>{checkedAt}</span>
            </div>
            <div className='column is-6 card-field'>
              <span className='has-text-weight-bold'>Last update: </span>
              <span>{getLastUpdatedAt()}</span>
            </div>
          </div>
          <hr />
          <div className='card-field'>
            <div className='columns is-mobile'>
              <div className='column is-half'>
                <div className='has-text-weight-bold'>Target name</div>
              </div>
              <div className='column is-half'>
                <div className='has-text-weight-bold'>Current value</div>
              </div>
            </div>
            {Array.isArray(targets) &&
              targets.map((target, i) => {
                return (
                  <div className='columns target-row is-mobile' id={target.id} key={i}>
                    <div className='column is-half'>{target.name}</div>
                    <div className='column is-half'>
                      {target.data ? target.data : 'NULL'}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          margin-bottom: 2rem;
          border-radius: 0.5rem !important;
        }
        header {
          border-radius: 0.5rem 0.5rem 0 0 !important;
        }
        .card-header-icon {
          justify-content: center;
          align-items: center;
        }
        .target-row > div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .target-row:hover {
          background-color: hsl(0, 0%, 98%); // white-bis
        }
      `}</style>
    </div>
  )
}

export default WatchCard
