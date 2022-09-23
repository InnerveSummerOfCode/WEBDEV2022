import React from 'react'
import './toggle.css'

const ToggleSwitch = ({value, setValue, name}) => {
  return (
    <div className='toggle_switch'>
        <input type="checkbox" className="checkbox" value={value} id={name} onChange={(e) => setValue(e.target.checked)}/>
        <label className="label" htmlFor={name}>
            <span className='inner'></span>
            <span className="switch"></span>
        </label>
    </div>
  )
}

export default ToggleSwitch