import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <div className='nav'>
      <ul className='nav-ul'> 
      <Link to='/'> <li className='listItem'> Admin Login</li> </Link>
      <Link to='/weather'> <li className='listItem'> Weather Info</li> </Link>
      <Link to='/manual-subscribe'> <li className='listItem'> Subscription </li> </Link>
      <li className='listItemTele'> Telegram's Link 👉🏼 </li>
      <a href="https://t.me/Weather_Kamal_bot">
      <img src="tele.png" className="teleImg"/>
      </a>
      </ul>
    </div>
  )
}
