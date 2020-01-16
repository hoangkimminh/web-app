const Layout = (props) => {
  const { left, children, right } = props
  return (
    <article className='columns'>
      {left && <section className='column is-4-tablet is-3-widescreen is-paddingless'>{left}</section>}
      <section className='column is-paddingless'>{children}</section>
      {right && <section className='column is-4-tablet is-3-widescreen is-paddingless'>{right}</section>}
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
