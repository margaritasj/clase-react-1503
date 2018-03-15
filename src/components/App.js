import React from 'react';
import Header from './Header';
import Section from './Section';

const data = {
  title : "Bienvenidos a React",
  url: "favicon.ico",
  paragraph: "img",
  contenido : "Si quiero llegar a realizar single page aplications debo utilizar",
  items : ['Redux', 'React-router', 'JS']
}


const AppSimple = () => (
  <div>
    <Header 
      title = {data.title}
      url = {data.url}
      paragraph = {data.paragraph}
    />
    
    <Section 
      contenido = {data.contenido}
      arrayCursos = {data.items}
    />
  </div>
);

export default AppSimple