import React from 'react';
import Layout from './Layout';

export default function({ title = 'Title', description = 'description', image }) {
  return (
    <Layout background={image}>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </Layout>
  );
}