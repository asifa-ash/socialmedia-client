import React from 'react'
import MyPost from '../MyPosts/MyPosts'
import PostShare from '../PostShare/PostShare'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
function PostSide() {
  return (
    <div className='postSide'>
    <div className="navIcon">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />

      </div>

    <PostShare/>
    <MyPost/>
    </div>
  )
}

export default PostSide
