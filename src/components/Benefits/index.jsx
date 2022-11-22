import React from 'react';
import './Benefits.css'

const Benefits = ({title, description}) => {
  return (
    <React.Fragment>
      <div className="benefit">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </React.Fragment>
  )
}

export default Benefits