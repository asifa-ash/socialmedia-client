import React from 'react'
import { Followers } from '../../Data/FollowersData.js'

function FollowCard() {
    return (
        <div className='followCard'>
            <h5>
                Who is following you
            </h5>
            {Followers.map((follower, id) => {
                return (

                    <div className="follower">
                        <img src={follower.img} alt="" className='followerImg' />

                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                        <button className='button fc-button'>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowCard