const Layout = (props) => (
  <section id='layout'>
    {props.children}
    <style jsx>{`
      min-width: 100vw;
      min-height: 100vh;
    `}</style>
  </section>
)

export default Layout
