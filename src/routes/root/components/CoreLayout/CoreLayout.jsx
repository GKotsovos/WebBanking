import React from 'react'
import Navbar from '../../containers/NavbarContainer'
import Footer from '../Footer'
import 'styles/styles.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Navbar />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
