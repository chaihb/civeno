import React from 'react';
import PageContent from '../PageContent';
import Row from 'react-bootstrap/lib/Row';

const style = {
  row: {
    textAlign: 'center',
  },
};

export default function({ title = 'Title', description = '' }) {
  return (
    <PageContent>
      <Row style={style.row}>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </Row>
    </PageContent>
  );
}