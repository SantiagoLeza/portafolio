import React, { useEffect, useState } from 'react'
import ListRepositories from './ListRepositories'
import ProfileInfo from './ProfileInfo'
import './Github.css'

function Github() {

  const [profileInfo, setProfileInfo] = useState({})
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/SantiagoLeza')
      .then(response => response.json())
      .then(data => {
        setProfileInfo(data)
      })
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/SantiagoLeza/repos')

      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  }, [])

  return (
    <div>
      <div className='github'>
        <ProfileInfo profile={profileInfo} />
        <ListRepositories repos={repositories}/>
      </div>
      <div className='activity'>
        <p>Actividad reciente:</p>
        <img src="https://ghchart.rshah.org/58a6ff/SantiagoLeza" alt="SantigoLeza's activity"></img>
      </div>
    </div>

  )
}

export default Github