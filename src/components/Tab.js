import React from 'react';
import styled from 'styled-components';

export const TabButton = styled.button`
    display: block;
    border: none;
    background: ${({ isActive }) => isActive ? 'var(--black)' : 'var(--light-gray)'};
    color: ${({ isActive }) => isActive ? 'var(--white)' : 'var(--black)'};
    text-decoration: none;
    font-size: 1.125rem;
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 2rem;
    cursor: ${({ isActive }) => isActive ? 'default' : 'pointer'};
    
    &:hover {
        background: var(--black);
        color: var(--white);
    }

    &:focus {
        outline: none;
        z-index: 1;
        box-shadow: 0 0 0 4px var(--primary);
    }
`


const Tab = ({ tabIndex, label, onClick, ...rest }) => (
    <TabButton
        onClick={(event) => {
            event.preventDefault();
            onClick(tabIndex);
        }}
        {...rest}>
        {label}
    </TabButton>
)

export default Tab