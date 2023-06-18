import React from 'react'
import './RightSide.css'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'


const RightSide = () => {
  return (
    <div className="Rigthside">
            <div className="navIcons">

                <img src="./img/home.png" alt="" />
                    <UilSetting/>
                <img src="./img/noti.png" alt="" />
                <img src="./img/comment.png" alt="" />
            </div>

            <TrendCard/>

            <button className="button r-button">
                share
            </button>
    </div>
  )
}

export default RightSide