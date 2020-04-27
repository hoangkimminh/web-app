import TruncateMarkup from 'react-truncate-markup'
import { observer } from 'mobx-react'

import { secondsToHumanTime, mostRecent } from '../utils'
import { useStores } from '../hooks'

const WatchCard = observer((props) => {
  const { url, _id, interval, targets, checkedAt, active, templateName } = props

  const { watchListStore } = useStores()

  const onChangeStatus = async () => {
    watchListStore.toggleStatus(_id)
  }

  const mostRecentValue = mostRecent(
    targets.filter((target) => target.updatedAt).map((target) => target.updatedAt)
  )

  return (
    <div className='card'>
      <header className='card-header has-background-light'>
        <p className='card-header-title'>
          <TruncateMarkup lines={1}>
            <a className='url' href={url} target='_blank'>
              {url}
            </a>
          </TruncateMarkup>
        </p>
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
          <div className='columns is-gapless'>
            <div className='column'>
              <div className='card-field columns is-gapless'>
                <div className='column is-4'>
                  <p className='has-text-weight-bold'>Interval: </p>
                </div>
                <div className='column is-8'>
                  <span className='colon'>:</span>
                  <label>{secondsToHumanTime(interval)}</label>
                </div>
              </div>
              <div className='card-field columns is-gapless'>
                <div className='column is-4'>
                  <p className='has-text-weight-bold'>Template: </p>
                </div>
                <div className='column is-8'>
                  <span className='colon'>:</span>
                  <label>{templateName}</label>
                </div>
              </div>
              <div className='card-field columns is-gapless'>
                <div className='column is-4'>
                  <p className='has-text-weight-bold'>Targets: </p>
                </div>
                <div className='column is-8'>
                  <span className='colon'>:</span>
                  <label>{targets.length}</label>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card-field columns is-gapless'>
                <div className='column is-4'>
                  <p className='has-text-weight-bold'>Last check: </p>
                </div>
                <div className='column is-8'>
                  <span className='colon'>:</span>
                  <label>{checkedAt ? new Date(checkedAt).toLocaleString() : '-'}</label>
                </div>
              </div>
              <div className='card-field columns is-gapless'>
                <div className='column is-4'>
                  <p className='has-text-weight-bold'>Last update: </p>
                </div>
                <div className='column is-8'>
                  <span className='colon'>:</span>
                  <label>{mostRecentValue !== null ? mostRecentValue : '-'}</label>
                </div>
              </div>
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
                  <div className='columns target-row is-mobile' key={i}>
                    <div className='column is-half'>{target.name}</div>
                    <div className='column is-half'>
                      {target.data ? target.data : '-'}
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
        .colon {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  )
})

export default WatchCard
