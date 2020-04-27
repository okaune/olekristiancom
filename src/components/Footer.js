import { getYear } from 'date-fns'
import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.footer`
    background: var(--black);
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FooterLinks = styled.p`
    color: var(--white);
    a {
        color: var(--white);
        text-decoration: underline;
        &:hover {
            color: var(--white);
            text-decoration: none;
        }
    }
`

const FooterCopyright = styled.p`
    color: var(--white);
    font-size: .875rem;
`

const Footer = () => (
    <FooterSection>
        <FooterLinks>
            <a href="mailto:post@olekristian.com">E-post</a>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/ole.kristian.aune">Facebook</a>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/olekristianaune/">LinkedIn</a>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;<a href="https://github.com/okaune">GitHub</a>
        </FooterLinks>
        <FooterCopyright>&copy; {getYear(new Date())} Ole Kristian Aune. Alle rettigheter forbeholdes.</FooterCopyright>
    </FooterSection>
)

export default Footer