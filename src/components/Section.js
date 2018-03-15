import React from 'react';
import Lista from './Lista'
import PropTypes from 'prop-types'

const Section = ({contenido, arrayCursos}) => (
  <section>
    <p className = "d-flex justify-content-center">{contenido}</p>
    <Lista cursos={arrayCursos}/>
  </section>
)

Section.protoTypes = {
  contenido: PropTypes.string.isRequired,
  arrayCursos: PropTypes.string.isRequired
}

export default Section