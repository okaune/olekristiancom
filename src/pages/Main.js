import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import differenceInYears from 'date-fns/difference_in_years'

import ResumeBlock from '../components/ResumeBlock';

import '../styles/css/Main.css';

const Main = props => {
  return (
    <div className="Main">
      <section id="intro" className="intro">
        <h2>Dataingeniørstudent</h2>
        <h1>Ole Kristian Aune</h1>
      </section>
      <section id="about">
        <h1>Om meg</h1>
        <p>
          Jeg er en student på {differenceInYears(new Date(), new Date(1995, 4, 8))} år som elsker å engasjere meg.
          Er med på å arrangere alt fra sosiale arrangementer til kurs, og er veldig opptatt av å arbeide for godt samhold mellom studentene.
          Fikk tidlig interesse for datamaskiner, og laget min første nettside da jeg gikk i 6. klasse.
          Derfra har interessen bare økt, og jeg prøver aktivt å holde meg oppdatert på alt det nye som skjer i bransjen.
        </p>

      </section>
      <section id="resume" className="resume">
        <h1>CV</h1>
        <h2>Utdannelse</h2>
        {props.cv.education.map((data, index) => <ResumeBlock key={index} data={data} />)}
        <h2>Arbeidserfaring</h2>
        {props.cv.experience.map((data, index) => <ResumeBlock key={index} data={data} />)}
        <h2>Engasjement</h2>
        {props.cv.involvement.map((data, index) => <ResumeBlock key={index} data={data} />)}
        <h2>Teknologier</h2>
        <p>{props.cv.technologies.join(', ')}</p>
        <p className="small">* Grunnleggende kunnskap</p>
      </section>
      <section id="contact">
        <h1>Kontakt meg</h1>
        <p>Ta gjerne kontakt dersom det er noe du lurer på, eller bare for å si hei.</p>
        <p><a href="mailto:post@olekristian.com">E-post</a> &middot; <a href="https://www.facebook.com/ole.kristian.aune">Facebook</a> &middot; <a href="https://www.linkedin.com/in/olekristianaune/">LinkedIn</a> &middot; <a href="https://github.com/okaune">GitHub</a></p>
      </section>
      <footer>
        <p>&copy; 2018 Ole Kristian Aune. Alle rettigheter forbeholdes.</p>
      </footer>
    </div>
  );
}

const mapStateToProps = state => ({
  cv: state.cv
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
