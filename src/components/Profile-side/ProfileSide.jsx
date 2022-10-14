import React from 'react'
import FollowCard from '../FollowersCard/FollowCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'

function ProfileSide() {
  return (
    <div className='profile-side'>
    <LogoSearch/>
    <ProfileCard/>
    <FollowCard/>
    </div>
  )
}

export default ProfileSide