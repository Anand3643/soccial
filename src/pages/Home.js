import React from 'react'
import './Home.css'
import ProfileSide from '../Componets/Profileside/ProfileSide'
import PostSide from '../Componets/PostSide/PostSide'
import RightSide from '../Componets/Rigthside/RightSide'




const Home = () => {
  return (
    <div className='Home'>
         <ProfileSide/>
        <PostSide/>
        <RightSide/>
        
    </div>
  )
}

export default Home