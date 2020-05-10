import { differenceInYears } from 'date-fns';
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

const About: React.FC = () => (
    <AboutSection>
        <AboutContainer>
            <AboutContent>
                <h2>Om meg</h2>
                <p>
                    Jeg er en engasjert{' '}
                    {differenceInYears(new Date(), new Date('1995-04-08'))}
                    -åring som for tiden kombinerer datateknologistiet ved NTNU
                    med deltidsjobb som IT-konsulent hos Kantega.
                </p>
                <AboutList>
                    <AboutListItem>
                        <h3>Datainteresse</h3>
                        <p>
                            Fra jeg var liten har jeg vært fasinert av
                            datamaskiner og hvordan de fungerer. Dette førte til
                            en interesse for programmering, og jeg laget min
                            første nettside da jeg gikk i 6. klasse. Derfra har
                            interessen bare økt, og jeg prøver aktivt å holde
                            meg oppdatert på alt det nye som skjer i bransjen.
                        </p>
                    </AboutListItem>
                    <AboutListItem>
                        <h3>Studentfrivillighet</h3>
                        <p>
                            Gjennom studietiden har jeg engasjert meg i flere
                            organisasjoner og innehatt diverse verv. Blandt
                            annet har jeg sittet i styret i studentpuben
                            Sukkerhuset og linjeforeningen TIHLDE.
                        </p>
                    </AboutListItem>
                </AboutList>
            </AboutContent>
            <AboutImageWrapper>
                <AboutImage src={aboutImg} alt="" />
            </AboutImageWrapper>
        </AboutContainer>
    </AboutSection>
);

export default React.memo(About);
