import React from 'react'
import differenceInYears from 'date-fns/difference_in_years'

import '../styles/About.scss'

const About = props => (
    <section className="about">
        <div className="about__container">
            <div className="about__content">
                <h2>Om meg</h2>
                <p>
                Jeg er en engasjert {differenceInYears(new Date(), new Date(1995, 4, 8))}-åring som for tiden kombinerer datateknologistiet ved NTNU med deltidsjobb som IT-konsulent hos Kantega.
                </p>
                <ul>
                    <li>
                        <h3>Datainteresse</h3>
                        <p>Fra jeg var liten har jeg vært fasinert av datamaskiner og hvordan de fungerer. Dette førte til en interesse for programmering, og jeg laget min første nettside da jeg gikk i 6. klasse. Derfra har interessen bare økt, og jeg prøver aktivt å holde meg oppdatert på alt det nye som skjer i bransjen.</p>
                    </li>
                    <li>
                        <h3>Studentfrivillighet</h3>
                        <p>Gjennom studietiden har jeg engasjert meg i flere organisasjoner og innehatt diverse verv. Blandt annet har jeg sittet i styret i studentpuben Sukkerhuset og linjeforeningen TIHLDE.</p>
                    </li>
                </ul>
            </div>
            <div className="about__image">
                <img src={require('../assets/images/about_picture.jpg')} alt=""/>
            </div>
        </div>
        
    </section>
)

export default About