import { observer } from 'mobx-react-lite'
import { useState, useContext } from 'react'

import { userStoreContext } from '../../stores/user'
import InputField from '../common/input-field'

const General = observer((props) => {
  const userStore = props.userStore

  return (
    <section className='section'>
      <div className='columns avatar is-centered'>
        <figure className='image is-256x256'>
          <img className='is-rounded' src={userStore.avatar} />
        </figure>
      </div>
      <h6 className='title is-6 has-text-centered'>
        {userStore.username ? userStore.username : userStore.name}&nbsp;&nbsp;&nbsp;
        <span className='tag is-rounded is-dark'>{userStore.privilege}</span>
      </h6>
      <div className='file has-name is-centered'>
        <label className='file-label'>
          <input className='file-input' type='file' label='resume' />
          <span className='file-cta'>
            <span className='file-icon'>
              <ion-icon name='cloud-upload' />
            </span>
            <span className='file-label'>Choose a file…</span>
          </span>
          <span className='file-name'>myavatar.png</span>
        </label>
      </div>
      <hr />
    </section>
  )
})

const PersonalInformation = observer((props) => {

  const userStore = props.userStore

  return (
    <section className='is-paddingless'>
      <div className='columns is-centered'>
        <div className='column is-hafl-desktop is-three-quarters-tablet is-full-mobile'>
          <p className='title is-size-4'>Personal Information</p>
          {/* Name field */}
          <InputField
            label='Name'
            value={userStore.name}
            type='text'
            iconName='person'
            readOnly={props.readOnly}
          />
          {/* Username field */}
          <InputField
            label='Username'
            value={userStore.username}
            type='text'
            iconName='eye'
            readOnly={props.readOnly}
          />
          {/* Gender field */}
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'>Gender</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <div className='control has-icons-left'>
                  <div className='select'>
                    <select>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <span className='icon is-left'>
                    <ion-icon label='male-female' />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Email field */}
          <InputField
            label='Email'
            value={userStore.email}
            type='email'
            iconName='mail'
            readOnly={props.readOnly}
          />
          {/* Birthday field */}
          <InputField
            label='Birthday'
            value={userStore.birthday}
            type='date'
            iconName='calendar'
            readOnly={props.readOnly}
          />
        </div>
      </div>
    </section>
  )
})

const LinkedAccountsField = (props) => {
  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>{props.service}</label>
      </div>
      <div className='field-body'>
        {props.id && (
          <div className='field is-grouped'>
            <div className='control has-icons-left has-icons-right'>
              <input className='input' type='text' defaultValue={props.id} readOnly />
              <span className='icon is-left'>
                {props.icon && <ion-icon name={props.icon} />}
                {!props.icon && <ion-icon src={props.src} />}
              </span>
            </div>
            {props.isUnconnectAvailable && (
              <div className='control'>
                <button className='button is-light'>
                  <span className='icon'>
                    <ion-icon name='close' />
                  </span>
                  <span>Unconnect</span>
                </button>
              </div>
            )}
          </div>
        )}
        {!props.id && (
          <div className='control'>
            <button className='button is-link'>
              <span className='icon'>
                <ion-icon name='link' />
              </span>
              <span>Connect</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const LinkedAccounts = observer((props) => {
  const userStore = props.userStore

  return (
    <section className='is-paddingless'>
      <div className='columns is-centered'>
        <div className='column is-hafl-desktop is-three-quarters-tablet is-full-mobile'>
          <p className='title is-size-4'>Linked Accounts</p>
          {/* Facebook field */}
          <LinkedAccountsField
            service='Facebook'
            id={userStore.linkedAccounts.facebook}
            isUnconnectAvailable={true}
            iconName='logo-facebook'
          />
          {/* Messenger field */}
          <LinkedAccountsField
            service='Messenger'
            id={userStore.linkedAccounts.messenger}
            isUnconnectAvailable={false}
            iconSrc='/static/icon-messenger.svg'
          />
          {/* Google field */}
          <LinkedAccountsField
            service='Google'
            id={userStore.linkedAccounts.google}
            isUnconnectAvailable={true}
            iconName='logo-google'
          />
        </div>
      </div>
    </section>
  )
})

const Security = (props) => {
  return (
    <section className='is-paddingless'>
      <div className='columns is-centered'>
        <div className='column is-hafl-desktop is-three-quarters-tablet is-full-mobile'>
          <p className='title is-size-4'>Security</p>
          {/* Change password field */}
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'>Password</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <p className='control is-expanded has-icons-left'>
                  <input className='input' type='password' placeholder='New password' />
                  <span className='icon is-left'>
                    <ion-icon name='key' />
                  </span>
                </p>
              </div>
              <div className='field'>
                <p className='control is-expanded has-icons-left has-icons-right'>
                  <input
                    className='input'
                    type='password'
                    placeholder='Repeat password'
                  />
                  <span className='icon is-left'>
                    <ion-icon name='key' />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SubmitFormField = (props) => {
  return (
    <div className='columns is-centered'>
      <div className='column is-hafl-desktop is-three-quarters-tablet is-full-mobile'>
        {props.readOnly && (
          /* Edit button */
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'></label>
            </div>
            <div className='field-body'>
              <p className='control'>
                <button
                  className='button is-primary'
                  onClick={(e) => {
                    e.preventDefault()
                    props.setReadOnly(false)
                  }}
                >
                  <span className='icon'>
                    <ion-icon name='create' />
                  </span>
                  <span>Edit</span>
                </button>
              </p>
            </div>
          </div>
        )}
        {!props.readOnly && (
          /* Submit field */
          <label className='field is-horizontal'>
            <label className='field-label is-normal'>
              <label className='label'> </label>
            </label>
            <div className='field-body is-grouped'>
              <button className='button is-primary'>
                <span className='icon'>
                  <ion-icon name='checkmark' />
                </span>
                <span>Save changes</span>
              </button>
              <button
                className='button is-light'
                onClick={(e) => {
                  e.preventDefault()
                  props.setReadOnly(true)
                }}
              >
                <span className='icon'>
                  <ion-icon name='close' />
                </span>
                <span>Cancel</span>
              </button>
            </div>
          </label>
        )}
      </div>
    </div>
  )
}

const ProfileForm = () => {
  const userStore = useContext(userStoreContext)

  const [readOnly, setReadOnly] = useState(true)

  return (
    <form>
      <General userStore={userStore} />
      <PersonalInformation userStore={userStore} readOnly={readOnly} />
      <LinkedAccounts userStore={userStore} readOnly={readOnly} />
      {!readOnly && <Security />}
      <SubmitFormField
        userStore={userStore}
        readOnly={readOnly}
        setReadOnly={setReadOnly}
      />
    </form>
  )
}

export default ProfileForm
