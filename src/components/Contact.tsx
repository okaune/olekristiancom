import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
    display: flex;
    flex-flow: row nowrap;
    padding: 2rem 0;
    background: var(--black);

    @media (max-width: 540px) {
        flex-direction: column;
        padding: 1rem 1rem 2rem 1rem;
    }
`;

const ContactHeader = styled.h2`
    color: var(--white);
`;

const ContactLink = styled.a`
    display: block;
    border: none;
    background: var(--white);
    color: var(--black);
    text-decoration: none;
    font-size: 0.875rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    cursor: pointer;
    position: relative;
    transition: transform 0.1s ease-in-out;

    @media (max-width: 540px) {
        margin-left: 0;
        margin-top: 0.5rem;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: -4px;
        width: 4px;
        height: 100%;
        background: var(--primary);
        transition: transform 0.1s ease-in-out;
    }
    &:hover {
        transform: scale(1.05);
        &:after {
            transform: scale(0.9);
        }
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 4px var(--primary);
    }
`;

const Contact: React.FC = () => (
    <ContactSection>
        <ContactHeader>Noe du lurer på?</ContactHeader>
        <ContactLink href="mailto:post@olekristian.com">
            Kontakt meg
        </ContactLink>
    </ContactSection>
);

export default React.memo(Contact);
