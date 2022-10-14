import React from 'react'
import {TrendData}  from '../../Data/TrendData';
function TrendCard() {
  return (
    <div className='trendCard'>
      
<h3 className='h5'>Trends for you</h3>

{TrendData.map((trend)=>{
    return(
        <div className="trend">
        <span>#{trend.name}</span>
        <span>{trend.shares}K share</span>
        </div>
    )
})}


    </div>
  )
}

export default TrendCard
