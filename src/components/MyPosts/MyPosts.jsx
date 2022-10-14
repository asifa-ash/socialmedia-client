import React from 'react'
import {PostData} from '../../Data/PostData.js'
import MyPost from '../MyPost/MyPost'
function MyPosts() {
  return (
    <div>
      <div className="posts">
      {PostData.map((post,id)=>{
        return <MyPost data={post} id={id}/>
        
      })}
      
      </div>
    </div>
  )
}

export default MyPosts
