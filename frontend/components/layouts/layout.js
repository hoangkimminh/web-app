const Layout = (props) => {
  const { left, children } = props
  return (
    <article className='is-flex'>
      {left && (
        <>
          <aside className='is-hidden-mobile'>{left}</aside>
          <aside className='is-hidden-mobile placeholder'></aside>
        </>
      )}
      <div>{children}</div>
      <style jsx>{`
        aside {
          width: 300px;
        }
        aside:not(.placeholder) {
          height: 100vh;
          position: fixed;
          overflow-y: scroll;
        }
        aside.placeholder {
          flex-shrink: 0;
        }
        div {
          flex-grow: 1;
        }
      `}</style>
    </article>
  )
}

export default Layout
