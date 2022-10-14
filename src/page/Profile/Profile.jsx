import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
import PostSide from '../../components/Post/PostSide'
import Right from '../../components/Right/Right'
function Profile() {
  return (
    <div className='profile'>
  
    <ProfileLeft/>
    <div className="profile-center">
    <ProfileCard/>
    <PostSide/>
     
    </div>
    <Right/>
      
    </div>
  )
}

export default Profile
