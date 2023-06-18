import React from 'react'
import'./FollowersCard.css'



const FollowersCard = () => {
  return (
    <div className="FollowerCard">
        <h3>Who is following you</h3>
        <div className="followerdata">

    <div className="followers">
        <img src="./img/img1.png" alt="" />
       
        <span>@dc_Studio</span> 
        <button className='button fc-button'>Follow</button>
    </div>


<br />
    <div className="followers">
        <img src="./img/img2.png" alt="" />     
        <span>@andrewthomas</span>
        <button className='button fc-button'>Follow</button>
    </div>
<br />
    <div className="followers">
        <img src="./img/img3.png" alt="" />
        
        <span>@livingstone</span> 
        <button className='button fc-button'>Follow</button>
        
            
    </div>
 <br />
    <div className="followers">
        <img src="./img/img4.jpg" alt="" />       
        <span>@dhanush</span>
        <button className='button fc-button'>Follow</button>
    </div>

 </div> 

    
        
    </div>
  )
}

export default FollowersCard