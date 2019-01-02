import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Tabs from '../components/Tabs'
import Tab from '../components/Tab'
import ResumeBlock from '../components/ResumeBlock'

import '../styles/Resume.scss'

const Resume = props => (
    <section className="resume">
        <h2 className="resume__header">Curriculum vitae</h2>
        <p>Her kan du se en liten oversikt over min utdanning og erfaring.</p>
        <Tabs>
            <Tab label="Utdannelse">
                {props.cv.education.map((data, index) => <ResumeBlock key={index} data={data} />)}
            </Tab>
            <Tab label="Arbeidserfaring">
                {props.cv.experience.map((data, index) => <ResumeBlock key={index} data={data} />)}
            </Tab>
            <Tab label="Engasjement">
                {props.cv.involvement.map((data, index) => <ResumeBlock key={index} data={data} />)}
            </Tab>
            <Tab label="Teknologier">
                <p>{props.cv.technologies.join(', ')}</p>
                <p className="resume__content--small">* Grunnleggende kunnskap</p>
            </Tab>
        </Tabs>
    </section>
)

const mapStateToProps = state => ({
    cv: state.cv
  });
  
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
mapStateToProps,
mapDispatchToProps
)(Resume);
