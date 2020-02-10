import { memo, useEffect } from 'react'
import { FB_PAGE_ID } from '../constants'

const useFacebook = (cb) => {
  useEffect(() => {
    const promise = new Promise((resolve) => {
      window.fbAsyncInit = () => {
        FB.init({
          xfbml: true,
          version: 'v6.0'
        })
        resolve(FB)
      }
      const fjs = document.getElementsByTagName('script')[0]
      if (document.getElementById('facebook-jssdk')) return
      const js = document.createElement('script')
      js.id = 'facebook-jssdk'
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    })
    promise.then(cb)
  }, [])
}

const MessengerPopup = memo(() => {
  useFacebook((FB) => {
    const el = document.createElement('div')
    el.className = 'fb-customerchat'
    el.setAttribute('attribution', 'setup_tool')
    el.setAttribute('page_id', FB_PAGE_ID)
    document.body.appendChild(el)
    FB.XFBML.parse()
  })
  return null
})

export default MessengerPopup
