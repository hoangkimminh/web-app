import axios from 'axios'
import { useCallback, useState } from 'react'
import { useToasts } from 'react-toast-notifications'

import InputField from '../common/input-field'
import { secondsToHumanTime } from '../../utils'
import { useStores } from '../../hooks'

const CreateWatchForm = () => {
  const { userStore } = useStores()
  const [url, changeUrl] = useState('')
  const [interval, changeInterval] = useState() // in seconds

  const { addToast } = useToasts()

  const submit = useCallback(async () => {
    try {
      const res = await axios.get('/api/watch-manager/templates?url=' + url)

      if (res.data.length > 0) {
        const { targets, _id } = res.data[0] // template's target
        const targetList = await targets.map((target) => ({ ...target, tid: _id }))
        const watch = {
          userID: userStore.id,
          url,
          interval,
          targets: targetList,
          templateID: _id,
        }
        try {
          await axios.post('/api/watch-manager', watch)
          resetForm()
          addToast('Create new watch successfully', { appearance: 'success' })
        } catch (error) {
          addToast('Error!', { appearance: 'error' })
        }
      } else {
        addToast('No template available', { appearance: 'error' })
      }
    } catch (error) {
      console.error(error)
      addToast('Error!', { appearance: 'error' })
    }
  }, [url, interval])

  const resetForm = () => {
    changeUrl('')
    changeInterval(undefined)
    document.getElementById('url').value = ''
    document.getElementById('interval').value = ''
  }

  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <InputField
        id='url'
        label='URL'
        iconName='link'
        type='url'
        placeholder='https://example.com'
        onChange={(e) => changeUrl(e.target.value)}
        value={url}
        required={true}
      />
      <InputField
        id='interval'
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
      <div className='field is-horizontal'>
        <div className='field-label'></div>
        <div className='field-body buttons'>
          <button className='button is-primary' onClick={submit}>
            Create
          </button>
          <button className='button is-danger is-outlined' onClick={resetForm}>
            Reset
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreateWatchForm
