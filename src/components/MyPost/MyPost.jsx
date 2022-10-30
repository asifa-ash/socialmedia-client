import React from 'react'
import Comment from '../../img/comment.png'
import share from '../../img/share.png'
import heart from '../../img/like.png'
import notlike from '../../img/notlike.png'

function MyPost({data}) {
  return (
    <div className='post'>
    <img src={data.image} alt="" />



    <div className="postReact">

    <img src={data.liked?heart:notlike} alt="" />
    <img className='hi' src={Comment} alt="" />  
    <img src={share} alt="" />  
    </div>
    <span style={{color:"gray",fontsize:"20px",gap:"5px"}}>{data.likes}</span>
    <div className="detail">
    <span>
    <b>{data.name}
    </b>
    </span>
    <span> {data.desc}</span>
    </div>
      
    </div>
  )
}

export default MyPost
