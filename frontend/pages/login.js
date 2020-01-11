import Link from 'next/link'

const Login = () => (
  <div className='is-flex'>
    <Link href='/auth/facebook'>
      <button className='button is-dark is-medium'>
        <ion-icon name='logo-facebook' size='large' />
        &nbsp;Login via Facebook
      </button>
    </Link>
    <style jsx>{`
      div {
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
)

export default Login
