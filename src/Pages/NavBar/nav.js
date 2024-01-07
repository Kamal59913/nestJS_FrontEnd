import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <div className='nav'>
      <ul className='nav-ul'> 
      <Link to='/'> <li className='listItem'> Admin Login</li> </Link>
      <Link to='/weather'> <li className='listItem'> Weather Infor</li> </Link>
      <Link to='/manual-subscribe'> <li className='listItem'> Subscription </li> </Link>
      </ul>
    </div>
  )
}
