import React from 'react'
import Photo from '../images/cara.png'
import './Navbar.css'

function Navbar({ tab, setTab }) {
  return (
    <nav>
      <div className='profile'>
        <img src={Photo} alt='' />
        <p className='name'
        onClick={() => {
          setTab('profile')
        }}>
          Santiago Leza
        </p>
      </div>
      <div className='options'>
        <p
        onClick={() => {
          setTab('github')
        }}>
          GitHub</p>
        <p
        onClick={() => {
          setTab('curriculum')
        }}>
        Curriculum</p>
      </div>
    </nav>
  )
}

export default Navbar