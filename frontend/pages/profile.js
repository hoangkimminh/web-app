import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'

import Layout from '../components/layouts/layout'
import Sidebar from '../components/layouts/sidebar'
import { userStoreContext } from '../stores/user'

const Profile = () => {
  const userStore = useContext(userStoreContext)

  return (
    <Layout left={<Sidebar />}>
      <General userStore={userStore} />
      <PersonalInformation userStore={userStore} />
      <LinkedAccounts userStore={userStore} />
      <Security />
    </Layout>
  )
}

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

const PersonalInformation = observer((props) => {
  const [isReadOnly, setReadOnly] = useState(true)

  const userStore = props.userStore

  return (
    <section className='is-paddingless'>
      <div className='columns is-centered'>
        <div className='column is-hafl-desktop is-three-quarters-tablet is-full-mobile'>
          <form>
            <p className='title is-size-4'>Personal Information</p>
            {/* Name field */}
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label'>Name</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='text'
                      defaultValue={userStore.name}
                      readOnly={isReadOnly}
                    />
                    <span className='icon is-left'>
                      <ion-icon name='person' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Username field */}
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label'>Username</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='text'
                      defaultValue={userStore.username}
                      readOnly={isReadOnly}
                    />
                    <span className='icon is-left'>
                      <ion-icon name='eye' />
                    </span>
                  </div>
                </div>
              </div>
            </div>

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
                      <ion-icon name='male-female' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Email field */}
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label'>Email</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='email'
                      defaultValue={userStore.email}
                      readOnly={isReadOnly}
                    />
                    <span className='icon is-left'>
                      <ion-icon name='mail' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Birthday field */}
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label'>Birthday</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='date'
                      defaultValue={userStore.birthday}
                      readOnly={isReadOnly}
                    />
                    <span className='icon is-left'>
                      <ion-icon name='calendar' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {isReadOnly && (
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
                        setReadOnly(false)
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
            {!isReadOnly && (
              /* Submit field */
              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'></label>
                </div>
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
                      setReadOnly(true)
                    }}
                  >
                    <span className='icon'>
                      <ion-icon name='close' />
                    </span>
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            )}
          </form>
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
          <form>
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
                      <ion-icon src='/static/icon-messenger.svg' />
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
          </form>
        </div>
      </div>
    </section>
  )
})

const Security = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section className='is-paddingless'>
      <div className='columns is-centered'>
        <div className='column is-hafl-desktop is-three-quarters-tablet is-full-mobile'>
          <form>
            <p className='title is-size-4'>Security</p>
            {/* Change password field */}
            {!isEditing && (
              /* Edit button */
              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'></label>
                </div>
                <div className='field-body'>
                  <p className='control'>
                    <button
                      className='button is-dark'
                      onClick={(e) => {
                        e.preventDefault()
                        setIsEditing(true)
                      }}
                    >
                      <span className='icon'>
                        <ion-icon name='key' />
                      </span>
                      <span>Change password</span>
                    </button>
                  </p>
                </div>
              </div>
            )}
            {isEditing && (
              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>Password</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='control is-expanded has-icons-left'>
                      <input
                        className='input'
                        type='password'
                        placeholder='New password'
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
            )}
            {isEditing && (
              /* Submit field */
              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'></label>
                </div>
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
                      setIsEditing(false)
                    }}
                  >
                    <span className='icon'>
                      <ion-icon name='close' />
                    </span>
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Profile
