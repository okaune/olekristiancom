import { getYear } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
    background: var(--black);
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FooterLinks = styled.p`
    color: var(--white);
    z-index: 1;
    a {
        color: var(--white);
        background: var(--black);
        text-decoration: underline;
        position: relative;
        &:hover {
            color: var(--white);
            text-decoration: none;
        }

        &:focus {
            outline: none;
            &::before {
                content: '';
                display: block;
                position: absolute;
                left: -0.5rem;
                top: 50%;
                transform: translateY(-50%);
                width: 1.25rem;
                height: 120%;
                border: 4px solid var(--primary);
                z-index: -1;
            }
        }
    }
`;

const FooterCopyright = styled.p`
    color: var(--white);
    font-size: 0.875rem;
`;

const Footer: React.FC = () => (
    <FooterSection>
        <FooterLinks>
            <a href="mailto:post@olekristian.com">E-post</a>
            &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
            <a href="https://www.facebook.com/ole.kristian.aune">Facebook</a>
            &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/olekristianaune/">LinkedIn</a>
            &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/okaune">GitHub</a>
        </FooterLinks>
        <FooterCopyright>
            &copy; {getYear(new Date())} Ole Kristian Aune. Alle rettigheter
            forbeholdes.
        </FooterCopyright>
    </FooterSection>
);

export default React.memo(Footer);
