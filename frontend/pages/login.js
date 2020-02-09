import { LinkedButton } from '../components/buttons'
import Layout from '../components/layout'

const LoginForm = () => (
  <form onSubmit={(event) => event.preventDefault()}>
    <div className='field'>
      <div className='control has-icons-left'>
        <span className='icon is-left'>
          <ion-icon name='person' />
        </span>
        <input className='input' type='text' placeholder='Username or email' />
      </div>
    </div>
    <div className='field'>
      <div className='control has-icons-left'>
        <span className='icon is-left'>
          <ion-icon name='key' />
        </span>
        <input className='input' type='password' placeholder='Password' />
      </div>
    </div>
    <div className='field'>
      <div className='control'>
        <button className='button is-fullwidth is-success'>Log in</button>
      </div>
    </div>
  </form>
)

const LoginButton = (props) => {
  const { service, style, disabled } = props
  return (
    <LinkedButton
      className='button is-fullwidth is-capitalized has-text-light'
      href={`/api/auth-service/${service}`}
      style={style}
      disabled={disabled}
    >
      <ion-icon name={`logo-${service}`} />
      <span>&nbsp;</span>
      {service}
    </LinkedButton>
  )
}

const Login = () => (
  <Layout>
    <section className='is-flex'>
      <div className='box is-flex has-background-light'>
        <h4 className='title is-4 has-text-centered'>Log In</h4>
        <div>
          <LoginForm />
        </div>
        <h6 className='subtitle is-6'>Or log in with:</h6>
        <div className='buttons'>
          <LoginButton service='facebook' style={{ backgroundColor: '#3b5998' }} />
          <LoginButton service='google' style={{ backgroundColor: '#db4437' }} disabled />
        </div>
      </div>
      <style jsx>{`
        section {
          width: 100vw;
          height: 100vh;
          align-items: center;
          justify-content: center;
        }
        .box {
          flex-direction: column;
          justify-content: center;
        }
        .box > h4,
        div {
          margin-bottom: 2rem;
        }
        .box > h6 {
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  </Layout>
)

export default Login
