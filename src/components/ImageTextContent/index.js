import React from 'react';
import ImageItem from './ImageItem';

export default function({ title = '', description = '', image }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <ImageItem src={image}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}