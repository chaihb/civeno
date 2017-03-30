import React from 'react';
import _ from 'lodash';
import Grid from 'react-bootstrap/lib/Grid';

function getText(text) {
  if (_.isArray(text)) {
    return text.map((paragraph, index) => <p key={`about_content_${index}`}>{paragraph}</p>);
  }
  return _.toString(text);
}

export default function({ text }) {
  return (
    <Grid>{getText(text)}</Grid>
  );
}