import React from 'react'

function TeamItem({image,name,title}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
  )
}

export default TeamItem