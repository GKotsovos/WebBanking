import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Tabs.css'

export const Tabs = () => (
  <div className="verticalCenter">
    <ul id="tabs" className="nav nav-tabs">
      <li className="active tab text-center"><a href="#">Accounts</a></li>
      <li className="tab text-center"><a className="tab" href="#">Cards</a></li>
      <li className="tab text-center"><a className="tab" href="#">Loans</a></li>
      <li className="tab text-center"><a className="tab" href="#">Transfers</a></li>
      <li className="tab text-center"><a className="tab" href="#">Payments</a></li>
    </ul>
  </div>
)

export default Tabs


{/*export const Tabs = () => (
  <div>
    <IndexLink to='/menu/accounts' activeClassName='route--active'>
      Accounts
    </IndexLink>
    {' · '}
    <Link to='/menu/loans' activeClassName='route--active'>
      Loans
    </Link>
  </div>
)
 */}
