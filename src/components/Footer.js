import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
  <footer>
    <p>
      Powered by: <a target="new" 
                      href="https://www.openbrewerydb.org/"
                      className="footerAnchor">
                      Open Brewery DB
                  </a>
    </p>
  </footer>
  )
}

export default Footer
