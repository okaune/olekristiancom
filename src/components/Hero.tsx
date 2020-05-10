import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/background.jpg';

const HeroSection = styled.section`
    min-height: 400px;
    overflow: hidden;
    position: relative;
    background: transparent;

    @media (max-width: 540px) {
        min-height: 300px;
    }

    &::before {
        content: '';
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: var(--primary) url(${backgroundImage}) no-repeat center
            center;
        background-blend-mode: multiply;
        background-size: cover;
        will-change: transform;
        z-index: -1;
    }
`;

const HeroTitle = styled.h1`
    font-size: 4.5rem;
    font-weight: 400;
    line-height: 1em;
    text-transform: uppercase;
    color: var(--light-gray);
    text-align: center;

    @media (max-width: 540px) {
        font-size: 3.5rem;
        padding: 0 1rem;
    }
`;

const HeroSubtitle = styled.h2`
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.5em;
    text-transform: uppercase;
    color: var(--light-gray);
`;

const Hero: React.FC = () => (
    <HeroSection>
        <HeroSubtitle>Dataingeniør</HeroSubtitle>
        <HeroTitle>Ole Kristian Aune</HeroTitle>
    </HeroSection>
);

export default React.memo(Hero);
