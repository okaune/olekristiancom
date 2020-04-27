import React, { Fragment, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import styled from 'styled-components';

const TabNavigation = styled.nav`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`
const TabButton = styled.button`
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

const TabContent = styled.div`
    max-width: 640px;
    width: 100%;
`

const TabContentMobile = styled.div`
    width: 100%;

    ${TabButton} {
        width: 100%;
        margin-top: 1rem;
        padding: .5rem;

        &:hover {
            background: var(--light-gray);
            color: var(--black);
            cursor: default;
        }
    }
`

export const Tab = ({ label }) => <></>

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label)

    const isMobile = useMediaPredicate("(max-width: 680px)");

    const onClickTabItem = (label) => {
        setActiveTab(label)
    }

    return (isMobile ? (
        <>
            <TabContentMobile>
                {children.map(({ props: { label, children } }) => (
                    <Fragment key={label}>
                        <TabButton key={label} disabled>{label}</TabButton>
                        {children}
                    </Fragment>
                )
                )}
            </TabContentMobile>
        </>
    ) : (
            <>
                <TabNavigation>
                    {children.map(({ props: { label } }) => {
                        return (
                            <TabButton
                                isActive={activeTab === label}
                                label={label}
                                key={label}
                                onClick={() => onClickTabItem(label)}
                            >
                                {label}
                            </TabButton>
                        );
                    })}
                </TabNavigation>
                <TabContent>
                    {children.find(({ props: { label } }) => label === activeTab).props.children}
                </TabContent>
            </>
        )
    )
}

export default Tabs;