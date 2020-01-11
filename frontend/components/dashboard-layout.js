import { useState, useEffect } from 'react'

const DashboardLayout = (props) => {
  return (
    <div id='app'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <h2 className='navbar-item'>NIGHT WATCH</h2>
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
          style={{ borderRightColor: 'red' }}
        >
          <p className='menu-label is-hidden-touch'>MANAGE WATCHES</p>
          <ul className='menu-list'>
            <li>
              <a href='#' className=''>
                <span className='icon'>
                  <ion-icon name='logo-facebook'></ion-icon>
                </span>{' '}
                My watches
              </a>
            </li>
            <li>
              <a href='#' className=''>
                <span className='icon'>
                  <ion-icon name='logo-facebook'></ion-icon>
                </span>{' '}
                About
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
