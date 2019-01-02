import React from 'react'

import '../styles/ResumeBlock.scss'

const ResumeBlock = props => (
  <div className="resume-block">
    {(props.data.location || props.data.period) &&
      <p className="resume-block__pre">
        {props.data.location}
        {props.data.location && 
          props.data.period && 
          <React.Fragment>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;</React.Fragment>}
        {props.data.period}
      </p>
    }
    {props.data.title &&
      <h3 className="resume-block__title">
        {props.data.title}
      </h3>
    }
    {props.data.description &&
      <p className="resume-block__description">
        {props.data.description}
      </p>
    }
  </div>
)

export default ResumeBlock;
