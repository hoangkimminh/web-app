import { LinkedButton } from '../components/buttons'
import Layout from '../components/layout'

const LoginForm = () => (
  <form onSubmit={(event) => event.preventDefault()}>
    <div className='field'>
      <div className='control has-icons-left'>
        <span className='icon is-left'>
          <ion-icon name='person' />
        </span>
        <input className='input' type='text' placeholder='Username or email' disabled />
      </div>
    </div>
    <div className='field'>
      <div className='control'>
        <button className='button is-fullwidth is-outlined is-success' disabled>
          Log in
        </button>
      </div>
    </div>
  </form>
)

const LoginButton = (props) => {
  const { service, disabled } = props
  return (
    <LinkedButton
      className='button is-dark is-fullwidth is-capitalized'
      href={`/api/auth-service/${service}`}
      icon={<ion-icon name={`logo-${service}`} />}
      text={service}
      disabled={disabled}
    />
  )
}

const Login = () => (
  <Layout>
    <section className='is-flex'>
      <div className='box is-flex has-background-white-bis'>
        <h4 className='title is-4 has-text-centered is-marginless'>Log In</h4>
        <hr />
        <LoginForm />
        <hr />
        <h6 className='subtitle is-6'>Or log in with:</h6>
        <div className='buttons'>
          <LoginButton service='facebook' />
          <LoginButton service='google' disabled />
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
      `}</style>
    </section>
  </Layout>
)

export default Login
