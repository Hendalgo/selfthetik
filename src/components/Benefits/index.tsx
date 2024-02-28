import React from 'react';
import './Benefits.css'

interface BenefitsProps {
  title: string;
  description: string;
}

const Benefits = ({title, description}: BenefitsProps): React.JSX.Element => {
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