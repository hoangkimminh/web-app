const Layout = (props) => {
  const { left, children, right } = props
  return (
    <article className='columns'>
      {left && <section className='column is-4-tablet is-3-widescreen'>{left}</section>}
      <section className='column'>{children}</section>
      {right && <section className='column is-4-tablet is-3-widescreen'>{right}</section>}
      <style jsx>{`
        article {
          min-width: 100vw;
          min-height: 100vh;
          margin-bottom: 0;
        }
      `}</style>
    </article>
  )
}

export default Layout
