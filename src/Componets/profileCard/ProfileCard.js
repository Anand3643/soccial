import React from 'react'
import './ProfileCard.css'

const ProfileCard = () => {

    const ProfilePage =true;

  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src=".\img\cover.jpg" alt="" />
            <img src=".\img\profileImg.jpg" alt="" />
        </div>
        <div className="ProfileName">
          <span>joseph vijay</span>
          <span>@actor</span>
        </div>

        <div className="followStatus">
          <hr />

          <div>
            <div className="follow">
              <span>67</span>
              <span>Following</span>
            </div>

          <div className='vl'></div>
          <div className="follow">
              <span>22.25 M</span>
              <span>Follow</span>
            </div>

           {/*    {ProfilePage && {
                 
                <>
            <div className="vl">

              </div>
               <div className="follow">
               <span>3</span>
               <span>Posts</span>
               </div> 
                </>
              
             }} */} 

             </div>
            <hr />
        </div>
        <span>
          My Profile
        </span>
    </div>
  )
}

export default ProfileCard