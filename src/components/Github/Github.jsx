import React, { useEffect, useRef, useState } from 'react'
import ListRepositories from './ListRepositories'
import ProfileInfo from './ProfileInfo'

function Github() {

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/SantiagoLeza')
      .then(response => response.json())
      .then(data => {
        setProfileData(data);
      }
      )
  }, [setProfileData])

  

  return (
    <div>
      {console.log(profileData)}
      <ProfileInfo profile={profileData} />
      <ListRepositories />
    </div>

  )
}

export default Github