import React from 'react'

export const Link = ({ title, link }) => (
  <div>
    <li>
      <a href={link} target="_blank">{title}</a>      
    </li>
  </div>
)

export default Link
