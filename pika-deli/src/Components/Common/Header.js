import React, { useState, useEffect, useContext } from 'react'
import PikaContext from '../../context/PikaContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'



const Header = () => {
  const { state, dispatch } = useContext(PikaContext)

  return (
    <div className='bg-blue-500'>
      <FontAwesomeIcon icon={faBars} />
    </div>

  )
}

export default Header
