import React from 'react';
import _ from 'lodash';

function getText(text) {
  if (_.isArray(text)) {
    return text.map((paragraph, index) => <p key={`about_content_${index}`}>{paragraph}</p>);
  }
  return _.toString(text);
}

export default function({ text }) {
  return (
    <div>{getText(text)}</div>
  );
}