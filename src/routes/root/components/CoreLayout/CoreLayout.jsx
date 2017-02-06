import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './CoreLayout.css'
import 'styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div id="coreLayout">
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
