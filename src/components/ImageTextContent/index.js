import React from 'react';
import ImageItem from './ImageItem';
import {Link} from 'react-router-dom';

const style = {
  a: {
    textDecoration: 'none',
  }
}

export default function({ title = '', description = '', image, to }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <ImageItem src={image}/>
      {to ?
        <h2><Link to={to} style={style.a} onClick={scrollToHead}>{title}</Link></h2>
        :
        <h2>{title}</h2>
      }
      <p>{description}</p>
    </div>
  );
}

function scrollToHead() {
  window.scrollTo(0, 0);
}