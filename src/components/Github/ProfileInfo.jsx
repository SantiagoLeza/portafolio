import React from 'react'
import './ProfileInfo.css'

function ProfileInfo({profile}) {
  
  return (
  <div className='profileInfo'>
      <a href={profile.html_url} target='_blank' rel="noreferrer">
          <img className='profilePicture' src={profile.avatar_url} alt={profile.name} />
      </a>
      <h3>{profile.name}</h3>
      <a href={profile.html_url} target="_blank" rel="noreferrer" className="profile-login">
        <p className='verGH'>
          Ver Perfil
        </p>
      </a>
      <p className="profile-bio">{profile.bio}</p>
  </div>
  )
}

export default ProfileInfo