import React from 'react'
import getYear from 'date-fns/get_year'

import '../styles/Footer.scss'

const Footer = props => (
    <footer className="footer">
        <p className="footer__links"><a href="mailto:post@olekristian.com">E-post</a>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/ole.kristian.aune">Facebook</a>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/olekristianaune/">LinkedIn</a>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;<a href="https://github.com/okaune">GitHub</a></p>
        <p className="footer__copy">&copy; {getYear(new Date())} Ole Kristian Aune. Alle rettigheter forbeholdes.</p>
    </footer>
)

export default Footer