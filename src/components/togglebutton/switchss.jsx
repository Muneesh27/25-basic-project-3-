import React from 'react'
import './switch.css'



const switchss = () => {
  return (
    <div  id='light'>
      <label className='switch'>
        <input type="checkbox"/>
        <span className='slider'/>
      </label>
    </div>
  )
}

export default switchss