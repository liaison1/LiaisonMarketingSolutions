import React from 'react'
import {GiBroom} from 'react-icons/gi'

const ServicesCard = (props) => {
  const {heading, Icon, text} = props
  return (
    <div className='serviceCard'>
        <Icon size={40}/>
        <h1>{heading}</h1>
        <p>{text}</p>
    </div>
  )
}

export default ServicesCard