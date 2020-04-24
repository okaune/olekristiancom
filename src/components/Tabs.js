import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TabButton } from './Tab'

const ResumeNavigation = styled.nav`
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    @media (max-width: 680px) {
        flex-direction: column;
        margin: 1rem 0;
        width: 100%;
    }
`

const ResumeContent = styled.div`
    max-width: 640px;
    width: 100%;
`

const ResumeContentMobile = styled.div`
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

const Tabs = (props) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 680)

    const handleWindowResize = () => setIsMobile(window.innerWidth <= 680)

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return window.removeEventListener('resize', handleWindowResize)
    }, [])

    const handleTabClick = index => setActiveTabIndex(index)

    const renderChildrenWithTabsApiAsProps = () => {
        return React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: () => handleTabClick(index),
                isActive: index === activeTabIndex
            });
        });
    }

    const renderActiveTabContent = () => {
        const { children } = props;
        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    const renderMobileContent = () => {
        return React.Children.map(props.children, (child, index) => {
            const button = React.cloneElement(child, {
                disabled: true
            })
            return <ResumeContentMobile>{[button, ...child.props.children]}</ResumeContentMobile>
        })
    }

    return (
        isMobile ?
            (
                <>
                    {renderMobileContent()}
                </>
            ) : (
                <>
                    <ResumeNavigation>
                        {renderChildrenWithTabsApiAsProps()}
                    </ResumeNavigation>
                    <ResumeContent>
                        {renderActiveTabContent()}
                    </ResumeContent>
                </>
            )
    )

}

export default Tabs