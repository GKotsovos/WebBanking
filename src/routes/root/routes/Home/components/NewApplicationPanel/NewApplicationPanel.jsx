import React from 'react'
import FontAwesome from 'react-fontawesome'
import './NewApplicationPanel.css'

export const NewApplicationPanel = ({ changePanel }) => (
  <ul className="list-group">
    <li id="newUser" className="list-group-item">
      <h3 id="newUserTitle" className="panel-title titles verticalCenterLogin">
        <FontAwesome id="userIcon" name="user" />
        <span>Νέος Χρήστης</span>
      </h3>
      <button
        onClick={() => changePanel('NEW_APPLICATION')}
        id="newUserButton"
        className="btn btn-default buttons"
        type="submit">
        Αίτηση Εγγραφής
      </button>
    </li>
  </ul>
)

export default NewApplicationPanel
