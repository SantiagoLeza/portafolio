import React from 'react'
import Curriculum from './Curriculum'
import Github from './Github/Github'
import './Main.css'
import Profile from './Profile'

function Main({tab, setTab}) {
  return (
    <div className='main'>
      {tab === 'profile' && <Profile />}
      {tab === 'github' && <Github />}
      {tab === 'curriculum' && <Curriculum />}
    </div>
  )
}

export default Main