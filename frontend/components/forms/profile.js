import { observer } from 'mobx-react-lite'
import { useState } from 'react'

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
          <input className='file-input' type='file' name='resume' />
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

const PersonalInformationInputField = (props) => {
  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>{props.name}</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <div className='control has-icons-left has-icons-right'>
            <input
              className='input'
              type={props.type}
              defaultValue={props.value}
              readOnly={props.isReadOnly}
            />
            <span className='icon is-left'>
              <ion-icon name={props.icon} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const PersonalInformation = observer((props) => {
  // const [isReadOnly, setReadOnly] = useState(true)

  const userStore = props.userStore

  return (
    <section className='is-paddingless'>
      <div className='columns is-centered'>
        <div className='column is-hafl-desktop is-three-quarters-tablet is-full-mobile'>
          <p className='title is-size-4'>Personal Information</p>
          {/* Name field */}
          <PersonalInformationInputField
            name='Name'
            value={userStore.name}
            type='text'
            icon='person'
            isReadOnly={props.isReadOnly}
          />
          {/* Username field */}
          <PersonalInformationInputField
            name='Username'
            value={userStore.username}
            type='text'
            icon='eyse'
            isReadOnly={props.isReadOnly}
          />
          {/* Gender field */}
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'>Gender</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <div class='control has-icons-left'>
                  <div class='select'>
                    <select>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <span className='icon is-left'>
                    <ion-icon name='male-female' />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Email field */}
          <PersonalInformationInputField
            name='Email'
            value={userStore.email}
            type='email'
            icon='mail'
            isReadOnly={props.isReadOnly}
          />
          {/* Birthday field */}
          <PersonalInformationInputField
            name='Birthday'
            value={userStore.birthday}
            type='date'
            icon='calendar'
            isReadOnly={props.isReadOnly}
          />
        </div>
      </div>
    </section>
  )
})

const LinkedAccounts = observer((props) => {
  const userStore = props.userStore

  return (
    <section className='is-paddingless'>
      <div className='columns is-centered'>
        <div className='column is-hafl-desktop is-three-quarters-tablet is-full-mobile'>
          <p className='title is-size-4'>Linked Accounts</p>
          {/* Facebook field */}
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'>Facebook</label>
            </div>
            <div className='field-body'>
              {userStore.linkedAccounts.facebook && (
                <div className='field is-grouped'>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='text'
                      defaultValue={userStore.linkedAccounts.facebook}
                      placeholder='Your Facebook ID'
                      readOnly
                    />
                    <span className='icon is-left'>
                      <ion-icon name='logo-facebook' />
                    </span>
                  </div>
                  <div className='control'>
                    <button className='button is-light'>
                      <span className='icon'>
                        <ion-icon name='close' />
                      </span>
                      <span>Unconnect</span>
                    </button>
                  </div>
                </div>
              )}
              {!userStore.linkedAccounts.facebook && (
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
          {/* Messenger field */}
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'>Messenger</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <div className='control has-icons-left has-icons-right'>
                  <input
                    className='input'
                    type='text'
                    defaultValue={userStore.linkedAccounts.messenger}
                    readOnly
                  />
                  <span className='icon is-left'>
                    <ion-icon src='/static/messenger-icon.svg' />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Google field */}
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className='label'>Google</label>
            </div>
            <div className='field-body'>
              {userStore.linkedAccounts.google && (
                <div className='field is-grouped'>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='text'
                      defaultValue={userStore.linkedAccounts.google}
                      placeholder='Your Google ID'
                      readOnly
                    />
                    <span className='icon is-left'>
                      <ion-icon name='logo-google' />
                    </span>
                  </div>
                  <div className='control'>
                    <button className='button is-light'>
                      <span className='icon'>
                        <ion-icon name='close' />
                      </span>
                      <span>Unconnect</span>
                    </button>
                  </div>
                </div>
              )}
              {!userStore.linkedAccounts.google && (
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

export { General, PersonalInformation, LinkedAccounts, Security }
