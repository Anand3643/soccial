import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' />
            </div>
        </div>
        <div className="info">
            <span>
                <b>Lives </b>
            </span>
            <span>in Chennai</span>
        </div>
        <div className="info">
            <span>
                <b>Now Work </b>
            </span>
            <span> #T67 leo</span>
        </div>
        <div className="info">
            <span>
                <b>profession </b>
            </span>
            <span>Actor </span>
        </div>

        <button className= "button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard