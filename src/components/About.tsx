import React from 'react';
import styled from 'styled-components';
import aboutImg from '../assets/images/Ole_Kristian_Aune.jpg';

const AboutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        to right,
        var(--light-gray) 75%,
        var(--white) 75%,
        var(--white)
    );

    @media (max-width: 680px) {
        background: var(--light-gray);
    }
`;

const AboutContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    padding: 5rem 1rem;

    @media (max-width: 680px) {
        flex-direction: column;
        padding: 3rem 1rem;
    }
`;

const AboutContent = styled.div`
    flex: 0 0 50%;
    padding-right: 1rem;
`;

const AboutList = styled.ul``;

const AboutListItem = styled.li`
    list-style: none;
    position: relative;
    margin: 1rem 0;
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -40px;
        width: 20px;
        height: 20px;
        border: 4px solid var(--primary);
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        left: -28px;
        top: 34px;
        bottom: calc(-1rem + 6px);
        width: 4px;
        background: var(--primary);
    }
`;

const AboutImageWrapper = styled.div`
    position: relative;
    width: 50%;

    @media (max-width: 680px) {
        order: -1;
        width: 100%;
    }

    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

const AboutImage = styled.img`
    position: absolute;
    width: calc(100% - 1rem);
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    margin-left: 1rem;

    @media (max-width: 680px) {
        width: 100%;
        margin-left: 0;
    }
`;

const About = () => (
    <AboutSection>
        <AboutContainer>
            <AboutContent>
                <h2>Om meg</h2>
                <p>
                    Engasjert og nysgjerring full-stack utvikler og medeier i Kantega.
                </p>
                
                <AboutList>
                { false && <>
                    <AboutListItem>
                        <h3>Punkt 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quidem incidunt itaque, magni inventore ducimus ratione impedit ipsam eligendi. Pariatur ad id molestiae natus obcaecati magni repellendus sed ratione ipsam!
                        </p>
                    </AboutListItem>
                    <AboutListItem>
                        <h3>Punkt 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dignissimos, voluptas mollitia, explicabo cumque tempore dolore vero saepe sunt nulla dolorem iste natus ex laborum quidem, reprehenderit architecto autem qui?
                        </p>
                    </AboutListItem>
                    </>
                    }
                </AboutList>
            </AboutContent>
            <AboutImageWrapper>
                <AboutImage src={aboutImg} alt="" />
            </AboutImageWrapper>
        </AboutContainer>
    </AboutSection>
)

export default About;
