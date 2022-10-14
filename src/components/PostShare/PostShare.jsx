import React, { useState } from 'react'
import profileImage from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import {UilTimes} from '@iconscout/react-unicons'
import { useRef } from 'react'


function PostShare() {
    const [image, setImage] = useState(null)
    const imgRef = useRef()

   const onImgChange=(event)=>{
if(event.target.files&&event.target.files[0]){
    let img=event.target.files[0]
    setImage({
        image:URL.createObjectURL(img),
    });
};

    }
    return (
        <div className='postShare'>
            <img src={profileImage} alt="" className="postShareImg" />
            <div className='w-75 d-flex align-items-center flex-column '>
                <input className='input' type="text" placeholder="What's happening" />
                <div className="postOption">
                    <div className="option"
                        style={{ color: "#4CB256" }}
                        onClick={()=>imgRef.current.click()}
                    >
                        <UilScenery />

                        Photo
                    </div>
                    <div className="option"
                        style={{ color: "#4A4EB7" }}>
                        
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option"
                        style={{ color: "#EF5757" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option"
                    >
                        <UilSchedule style={{ color: "#E1AE4A" }} />
                        Schedule
                    </div>
                    {/* <button className='button ps-button'>Share</button>*/}
                    <div style={{ display: "none" }}>
                        <input type="file" 
                        name="myImg"
                         ref={imgRef} 
                        onChange={onImgChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                    <UilTimes onClick={()=>setImage(null)} />
                    <img src={image.image} alt="" />
                    </div>
                ) }
            </div>
        </div>
    )
}

export default PostShare
