import React from 'react';
import Item from './Item'


const Lista = ({ cursos }) => (
  <ul>
    {cursos.map(curso =>
      <Item curso={curso} key={curso}/>)
    }
  </ul>
)

export default Lista