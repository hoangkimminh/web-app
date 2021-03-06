import axios from 'axios'
import { useCallback, useContext, useReducer, useState } from 'react'

import InputField from '../common/input-field'
import { userStoreContext } from '../../stores/user'
import { secondsToHumanTime } from '../../utils'

const CreateWatchForm = () => {
  const userStore = useContext(userStoreContext)
  const [url, changeUrl] = useState('')
  const [interval, changeInterval] = useState() // in seconds
  const [cssSelectors, dispatchCssSelectors] = useReducer(
    (state, change) => {
      const [i, newValue] = change
      if (!newValue) state.splice(i, 1)
      else state[i] = newValue
      return [...state]
    },
    [{ cssSelector: '', type: 'string', name: '' }]
  )
  const submit = useCallback(() => {
    const targets = cssSelectors
    axios.post('/api/watch-manager', {
      userID: userStore.id,
      url,
      interval,
      targets
    })
  }, [url, interval, cssSelectors])

  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <InputField
        label='URL'
        iconName='link'
        type='url'
        placeholder='https://example.com'
        onChange={(e) => changeUrl(e.target.value)}
        value={url}
        required={true}
      />
      <InputField
        label='Interval'
        iconName='options'
        type='number'
        onChange={(e) => changeInterval(parseInt(e.target.value))}
        value={interval}
        min={15 * 60}
        step={1}
        helpText={'aka:' + secondsToHumanTime(interval)}
        required={true}
      />
      <CssSelectorsField value={cssSelectors} onChange={dispatchCssSelectors} />
      <div className='field is-horizontal'>
        <div class='field-label'></div>
        <div className='field-body buttons'>
          <button className='button is-primary' onClick={submit}>
            Submit
          </button>
          <button className='button is-danger is-outlined'>Reset</button>
        </div>
      </div>
    </form>
  )
}

const CssSelectorsField = (props) => (
  <div className='field'>
    {props.value.map((cssSelector, i) => (
      <CssSelectorRow
        value={cssSelector}
        onChange={(newValue) => props.onChange([i, newValue])}
        isFirst={i === 0 ? true : false}
        key={i}
      />
    ))}
    <div className='field is-horizontal'>
      <div class='field-label'></div>
      <div className='field-body'>
        <div className='control'>
          <button
            className='button is-dark'
            onClick={() =>
              props.onChange([
                props.value.length,
                { cssSelector: '', type: 'string', name: '' }
              ])
            }
          >
            <span className='icon'>
              <ion-icon name='add' />
            </span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
    <div className='control'></div>
  </div>
)

const CssSelectorRow = (props) => {
  const { cssSelector, type, name } = props.value

  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>{props.isFirst ? 'CSS Selectors' : ''}</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <p className='control is-expanded has-icons-left'>
            <input
              className='input'
              type='text'
              placeholder='Unique name'
              value={name}
              onChange={(ev) =>
                props.onChange({ cssSelector: cssSelector, type, name: ev.target.value })
              }
              required
            />
            <span className='icon is-left'>
              <ion-icon name='key' />
            </span>
          </p>
        </div>
        <div className='field'>
          <p className='control is-expanded has-icons-left has-icons-right'>
            <input
              className='input'
              type='text'
              placeholder='#id.a-class'
              value={cssSelector}
              onChange={(ev) =>
                props.onChange({ cssSelector: ev.target.value, type, name })
              }
              required
            />
            <span className='icon is-left'>
              <ion-icon name='key' />
            </span>
          </p>
        </div>
        <div className='field'>
          <div className='control'>
            <div className='select'>
              <select
                value={type}
                onChange={(ev) =>
                  props.onChange({
                    cssSelector: cssSelector,
                    type: ev.target.value,
                    name
                  })
                }
              >
                <option>STRING</option>
              </select>
            </div>
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <button
              className='button is-danger is-outlined'
              onClick={() => props.onChange(null)}
            >
              <ion-icon name='remove' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateWatchForm
