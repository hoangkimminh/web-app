import { stringify } from "querystring";

const Login = () => {
  const onLogin = () => {
    fetch('/auth/facebook', {method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then(response => response.json())
    .then(user => {
      if (user) {
        console.log(user)
        localStorage.setItem('currentUser', JSON.stringify(user))
      }
    })
  }
  return (
    <div className='box is-flex'>
      <h3 className='title is-3'>WELCOME TO NIGHTWATCH!</h3>
      <a
        className='button is-medium'
        onClick={() => onLogin()}
        style={{ backgroundColor: '#4267B2', color: '#ffffff', display: 'inline' }}
      >
        <span className='icon'>
          <ion-icon name='logo-facebook'></ion-icon>
        </span>
        <span>Login with Facebook</span>
      </a>
      <style jsx>{`
        align-items: center;
        flex-direction: column;
      `}</style>
    </div>
  )
}

export default Login
