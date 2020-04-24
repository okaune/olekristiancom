import React from 'react';
import styled from 'styled-components';
import ResumeBlock from '../components/ResumeBlock';
import Tab from '../components/Tab';
import Tabs from '../components/Tabs';
import { contextWrapper } from '../store/context';


const ResumeSection = styled.section`
    padding: 4rem 0;

    @media (max-width: 680px) {
        padding: 2rem 1rem;
    }
`

const ResumeHeader = styled.h2`

`

const ResumeSmallText = styled.p`
    font-size: .75rem;
`

const Resume = props => (
    <ResumeSection>
        <ResumeHeader>Curriculum vitae</ResumeHeader>
        <p>Her kan du se en liten oversikt over min utdanning og erfaring.</p>
        <Tabs>
            <Tab label="Utdannelse" key="Utdannelse">
                {props.cv.education.map((data, index) => <ResumeBlock key={index} data={data} />)}
            </Tab>
            <Tab label="Arbeidserfaring" key="Arbeidserfaring">
                {props.cv.experience.map((data, index) => <ResumeBlock key={index} data={data} />)}
            </Tab>
            <Tab label="Engasjement" key="Engasjement">
                {props.cv.involvement.map((data, index) => <ResumeBlock key={index} data={data} />)}
            </Tab>
            <Tab label="Teknologier" key="Teknologier">
                <p>{props.cv.technologies.join(', ')}</p>
                <ResumeSmallText>* Grunnleggende kunnskap</ResumeSmallText>
            </Tab>
        </Tabs>
    </ResumeSection>
)

export default contextWrapper(Resume);
