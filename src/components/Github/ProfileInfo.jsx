import React from 'react'

function ProfileInfo({profile}) {
  return (
    <div>
        <p>
            {profile}
        </p>
        {/* <a href={profile.html_url} target='_blank' rel="noreferrer">
            <img src={profile.avatar} alt={profile.name} />
        </a> */}
        {/* <h3>{profile.name}</h3> */}
        {/* <h5 className="profile-login">
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            {profile.login}
          </a>
        </h5>
        <p className="profile-bio">{profile.bio}</p>     */}
    </div>
  )
}

export default ProfileInfo