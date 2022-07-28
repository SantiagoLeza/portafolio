import React from 'react'
import './ProfileInfo.css'

function ProfileInfo({profile}) {
  
    if(!profile) {
        profile = {
            name: 'Santiago Leza',
            html_url: 'https://github.com/SantiagoLeza',
            avatar_url: 'https://avatars.githubusercontent.com/u/85355165?v=4',
            login: '',
            bio: 'Estudiante programación UTN Mar del Plata.',
          }
    }

    return (
    <div className='profileInfo'>
        <a href={profile.html_url} target='_blank' rel="noreferrer">
            <img className='profilePicture' src={profile.avatar_url} alt={profile.name} />
        </a>
        <h3>{profile.name}</h3>
        <h5 className="profile-login">
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            {profile.login}
          </a>
        </h5>
        <p className="profile-bio">{profile.bio}</p>
    </div>
  )
}

export default ProfileInfo