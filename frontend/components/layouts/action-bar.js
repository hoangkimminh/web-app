import { LinkedButton } from '../common/buttons'

const ActionBar = () => (
  <div className='field'>
    <div className='control'>
      <LinkedButton
        className='button is-primary'
        href='/dashboard/[entry]/[subentry]'
        as='/dashboard/watch/create'
      >
        <ion-icon name='add-circle' />
        <span>&nbsp;</span>
        New watch
      </LinkedButton>
    </div>
  </div>
)

export default ActionBar
