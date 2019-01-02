import React from 'react'

const Tab = props => {
    return (
        <button className={`resume__navigation__link ${props.isActive ? 'resume__navigation__link--active' : ''}`}
            onClick={(event) => {
                event.preventDefault();
                props.onClick(props.tabIndex);
            }}>
            {props.label}
        </button>
    )
}

export default Tab