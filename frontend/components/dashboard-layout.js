import { useState, useEffect } from 'react'

const DashboardLayout = (props) => {
  return (
    <div id='app'>
      <nav className='navbar' role='navigation' aria-label='main navigation' style={{borderBottom: 'solid 1px #f0f3f5'}}>
        <div className='navbar-brand'>
          <p className='navbar-item is-size-3 has-text-weight-bold'>NIGHT WATCH</p>
          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
      </nav>

      <section className='main-content columns is-fullheight'>
        <aside
          className='column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile'
          style={{ backgroundColor: '#f0f3f5' }}
        >
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
        <div className='container column is-10'>{props.children}</div>
      </section>

      <footer className='footer is-hidden'>
        <div className='container'>
          <div className='content has-text-centered'>
            <p>Hello</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DashboardLayout
