import React, { useState } from "react";
import profileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../Utils/StoreConfig/postReducer";



function PostShare() {
   const loading=useSelector(state=>state.postReducers.uploading)
  console.log(loading,"kiti")
  const [image, setImage] = useState(null);
  const imgRef = useRef();
  const dispatch=useDispatch()
  const desc = useRef();

  const user = useSelector((state) => state.userReducers);
  console.log(user,"userkiti")

 
  const onImgChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };


  const reset=()=>{
    setImage(null);
    desc.current.value=""
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user.Auth._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
       console.log(newPost);
       
      try {

        dispatch(uploadImage(data))
       
      } catch(error) {
        console.log(error)

      }
    }
    dispatch(uploadPost(newPost))
    reset()

  };

  return (
    <div className="postShare">
      <img src={profileImage} alt="" className="postShareImg" />
      <div className="w-75 d-flex align-items-center flex-column ">
        <input
          ref={desc}
          required
          className="input"
          type="text"
          placeholder="What's happening"
        />
        <div className="postOption">
          <div
            className="option"
            style={{ color: "#4CB256" }}
            onClick={() => imgRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "#4A4EB7" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "#EF5757" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option">
            <UilSchedule style={{ color: "#E1AE4A" }} />
            Schedule
          </div>
          <button className="button ps-button"
           onClick={handleSubmit}
           disabled={loading}>
        
             {loading?"uploading...":"share"} 
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImg"
              ref={imgRef}
              onChange={onImgChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
