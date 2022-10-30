import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../Utils/StoreConfig/timelinePostReducer'

// import {PostData} from '../../Data/PostData.js'
import MyPost from '../MyPost/MyPost'


function MyPosts() {

  const dispatch=useDispatch()
  const user = useSelector(state => state.userReducers)
  const {posts,loading}=useSelector(state=>state.postReducers)
  console.log(posts);
  
  

  useEffect(() => {
    dispatch(getTimelinePosts(user.Auth._id))
  
   
  },[]);
  return (
    <div>
      <div className="posts">
      {posts?.map((post,id)=>{
        return<MyPost data={post} id={id}/>
      })}
       
      </div>
    </div>
  )
}

export default MyPosts
