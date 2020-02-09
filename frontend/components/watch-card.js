import { useState } from 'react'
import axios from 'axios'

import { secondsToHumanTime } from '../utils'

const WatchCard = (props) => {
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
    <div className='box'>
      <div className='card-content'>
        <div className='content'>
          <div className='card-field'>
            <span className='has-text-weight-bold'>URL: </span>
            <span>
              <a href={props.url}>{props.url}</a>
            </span>
            <hr />
          </div>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Active:&nbsp;</span>
            <input
              id={'switchActive' + props._id}
              type='checkbox'
              name={'switchActive' + props._id}
              className='switch is-rounded'
              checked={active}
              onChange={onChangeStatus}
            />
            <label htmlFor={'switchActive' + props._id}> </label>
          </div>
          <div className='card-field'>
            <span className='has-text-weight-bold'>Interval: </span>
            <span>{secondsToHumanTime(props.interval)}</span>
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
                {Array.isArray(props.targets) &&
                  props.targets.map((target, i) => {
                    return (
                      <tr key={i}>
                        <td>{target.name}</td>
                        <td>{target.cssSelector}</td>
                        <td>{target.value ? target.value : 'No value'}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className='card-field'>
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

export default WatchCard
