import React from 'react'
import Navbar from '../Navbar'
import './CoreLayout.css'
import 'styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Navbar />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
