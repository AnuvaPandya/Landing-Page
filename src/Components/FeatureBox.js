import React from 'react'

const FeatureBox = (props) => {
  return (
    <div id='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt='' />
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</p>
        </div>
    </div>
  )
}

export default FeatureBox