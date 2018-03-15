import React from 'react';
import PropTypes from 'prop-types'

const Header = ({ title, url, paragraph }) => (
  <header className="container-fluid header">
    <div className="d-flex justify-content-center">
      <h1 className="">{title}</h1>
    </div>
    <div className="d-flex justify-content-center">
      <img src={url} alt={title} />
      <p>{paragraph}</p>
    </div>
  </header>
)

Header.protoTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

export default Header