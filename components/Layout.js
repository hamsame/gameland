import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '15vh' }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
