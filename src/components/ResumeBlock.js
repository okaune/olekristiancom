import React from 'react'

import '../styles/css/ResumeBlock.css'

const ResumeBlock = props => (
  <div className="resume-block">
    <p className="resume-block__period">
      {props.data.period}
    </p>
    <p className="resume-block__title">
      {props.data.title}
    </p>
    <p className="resume-block__location">
      {props.data.location}
    </p>
    <p className="resume-block__description">
      {props.data.description}
    </p>
  </div>
)

export default ResumeBlock;
