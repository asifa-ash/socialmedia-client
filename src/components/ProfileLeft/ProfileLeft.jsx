import React from 'react'
import FollowCard from '../FollowersCard/FollowCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'

function ProfileLeft() {
  return (
    <div className='profile-side'>
      <LogoSearch/>
      <InfoCard/>
      <FollowCard/>

      
    </div>
  )
}

export default ProfileLeft
