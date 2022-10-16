import React from 'react'
import { useSelector } from 'react-redux';
import cover from '../../img/cover1.jpg'
import profile from '../../img/profileImg.jpg'

function ProfileCard() {
  const profilePage = true;
  const state = useSelector(state => state.reducer)
  console.log(state.Auth.name);
  return (
    <div className="profileCard">
      <div className="profileImg">
        <img src={cover} alt="" />
        <img src={profile} alt="" />
      </div>
      <div className="followStatus">
        <div>
          <div className="follow">
            <span>6.8k</span>
            <span>Following</span>
          </div>

          <div className="follow">
            <span>1.5k</span>
            <span>Followers</span>
          </div>
        </div>
      </div>
      <div className="profileName">
        <span>{state.Auth.name}</span>
        <span>Full Stack developer</span>
        {profilePage && (
          <>
            <div className="vl"></div>
            <div className="follow">
              <span>3</span>
              <span>Posts</span>
            </div>
          </>
        )}
      </div>
      <hr />
      {profilePage ? "" : <span className="span">My profile</span>}
    </div>
  );
}

export default ProfileCard