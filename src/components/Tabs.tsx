import React, { Fragment, ReactElement, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import styled from 'styled-components';

const TabNavigation = styled.nav`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;
const TabButton = styled(({ isActive, ...rest }) => <button {...rest} />)`
    display: block;
    border: none;
    background: ${({ isActive }) =>
        isActive ? 'var(--black)' : 'var(--light-gray)'};
    color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--black)')};
    text-decoration: none;
    font-size: 1.125rem;
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 2rem;
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};

    &:hover {
        background: var(--black);
        color: var(--white);
    }

    &:focus {
        outline: none;
        z-index: 1;
        box-shadow: 0 0 0 4px var(--primary);
    }
`;

const TabContent = styled.div`
    max-width: 640px;
    width: 100%;
`;

const TabContentMobile = styled.div`
    width: 100%;

    ${TabButton} {
        width: 100%;
        margin-top: 1rem;
        padding: 0.5rem;

        &:hover {
            background: var(--light-gray);
            color: var(--black);
            cursor: default;
        }
    }
`;

export const Tab: React.FC<{ label: string }> = ({ label }) => null;

const Tabs: React.FC<{
    children: React.ReactElement[] | React.ReactElement;
}> = ({ children }) => {
    let child: React.ReactElement<{ label: string }> | null = null;
    if (children) {
        if (Array.isArray(children)) {
            child = children[0] as React.ReactElement;
        } else {
            child = children as ReactElement;
        }
    }

    const [activeTab, setActiveTab] = useState(child?.props.label);

    const isMobile = useMediaPredicate('(max-width: 680px)');

    const onClickTabItem = (label: string) => {
        setActiveTab(label);
    };

    return isMobile ? (
        <>
            <TabContentMobile>
                {React.Children.map(
                    children,
                    (child: ReactElement<{ label: string }>) => (
                        <Fragment key={child.props.label}>
                            <TabButton key={child.props.label} disabled>
                                {child.props.label}
                            </TabButton>
                            {children}
                        </Fragment>
                    )
                )}
            </TabContentMobile>
        </>
    ) : (
        <>
            <TabNavigation>
                {React.Children.map(
                    children,
                    (child: ReactElement<{ label: string }>) => (
                        <TabButton
                            isActive={activeTab === child.props.label}
                            label={child.props.label}
                            key={child.props.label}
                            onClick={() => onClickTabItem(child.props.label)}>
                            {child.props.label}
                        </TabButton>
                    )
                )}
            </TabNavigation>
            <TabContent>
                {
                    (React.Children.toArray(children).find(
                        (child) =>
                            (child as React.ReactElement<{ label: string }>)
                                .props.label === activeTab
                    ) as React.ReactElement).props.children
                }
            </TabContent>
        </>
    );
};

export default Tabs;
