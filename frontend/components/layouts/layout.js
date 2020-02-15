const Layout = (props) => {
  const { left, children, right } = props
  return (
    <article className='columns is-gapless'>
      {left && (
        <aside className='column is-hidden-mobile is-4-tablet is-3-widescreen is-paddingless'>
          {left}
        </aside>
      )}
      <div className='column is-paddingless'>{children}</div>
      {right && (
        <aside className='column is-hidden-mobile is-4-tablet is-3-widescreen is-paddingless'>
          {right}
        </aside>
      )}
      <style jsx>{`
        article {
          min-width: 100vw;
          min-height: 100vh;
        }
      `}</style>
    </article>
  )
}

export default Layout
