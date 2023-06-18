import React from 'react'

import ProfileLeft from '../../Componets/ProfileLeft/ProfileLeft'
import ProfileCard from '../../Componets/profileCard/ProfileCard'
import PostSide from '../../Componets/PostSide/PostSide'

import './Profile.css'
import RightSide from '../../Componets/Rigthside/RightSide'
const Profile = () => {
  return (
    <div className="Profile">
                <ProfileLeft/>
    

            <div className="Profile-center">
                  <ProfileCard/>
                  <PostSide/>
            </div>               
                <RightSide/>
            </div>

  )
}

export default Profile