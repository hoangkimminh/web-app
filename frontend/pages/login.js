const Login = () => (
  <div className='box is-flex'>
    <h3 className='title is-3'>WELCOME TO NIGHTWATCH!</h3>
    <a
      className='button is-medium'
      href='/auth/facebook'
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

export default Login
