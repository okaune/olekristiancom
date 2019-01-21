import React from 'react'

const Tab = props => {
    const {isActive, tabIndex, label, ...rest} = props;
    return (
        <button className={`resume__navigation__link ${isActive ? 'resume__navigation__link--active' : ''}`}
            onClick={(event) => {
                event.preventDefault();
                props.onClick(tabIndex);
            }} {...rest}>
            {label}
        </button>
    )
}

export default Tab