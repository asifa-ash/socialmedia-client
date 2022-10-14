import React, { useState } from 'react'
import ShareModel from '../ShareModel/ShareModel'

import TrendCard from '../TrendCard/TrendCard'

function Right() {
  const [modelOpened, setModelOpened] = useState(false)
  return (
    <div className='right'>
      
      <TrendCard/>
      <button className='button r-button'  onClick={()=>setModelOpened(true)}>Share</button>

     
    <ShareModel modelOpened={modelOpened}
     setModelOpened={setModelOpened}/>
    </div>
  )
}

export default Right
