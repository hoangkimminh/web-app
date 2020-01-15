const Sidebar = (props) => {
  return (
    <aside
      className='is-narrow-mobile section is-hidden-mobile'
      style={{ backgroundColor: '#f0f3f5', height: '100%'}}
    >
      <div
        className='avatar'
        style={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center'
        }}
      >
        <figure class='image is-128x128'>
          <img
            class='is-rounded'
            src='https://bulma.io/images/placeholders/128x128.png'
          />
        </figure>
      </div>
      <div
        className='avatar'
        style={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center'
        }}
      >
        <span className='is-size-5'>Kokomi</span>
      </div>

      <p className='menu-label is-hidden-touch'>MANAGE WATCHES</p>
      <ul className='menu-list'>
        <li>
          <a href='#' className=''>
            <span className='icon'>
              <ion-icon name='eye'></ion-icon>
            </span>{' '}
            My watches
          </a>
        </li>
        <li>
          <a href='#' className=''>
            <span className='icon'>
              <ion-icon name='analytics'></ion-icon>
            </span>{' '}
            Analytics
          </a>
        </li>
      </ul>
      <p className='menu-label is-hidden-touch'>ACCOUNT</p>
      <ul className='menu-list'>
        <li>
          <a href='#' className=''>
            <span className='icon'>
              <ion-icon name='person'></ion-icon>
            </span>{' '}
            Profile
          </a>
        </li>
        <li>
          <a href='#' className=''>
            <span className='icon'>
              <ion-icon name='log-out'></ion-icon>
            </span>{' '}
            Logout
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
