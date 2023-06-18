import React from 'react'
import './ProfileLeft.css'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../Profileside/LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
                <LogoSearch/>
                <InfoCard/>
                <FollowersCard/>
                
    </div>
  )
}

export default ProfileLeft