import React from 'react';

export default function Header(props) {
  // CHildren pega o conteudo dentro da tag chamada no App.js
  // pois ao inves de chamar com  <Header />
  //estamos chamando com <Header>conteudo</Header>
  return <h1 style={{ textAlign: 'center' }}>{props.children}</h1>;
}
