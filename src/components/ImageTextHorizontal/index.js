import React from 'react';
import PageContent from '../PageContent';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const style = {
  outer: {
    marginTop: '20px',
    padding: '10px 0px',
    backgroundColor: '#ebf1f2',
  },
  content: {
    marginTop: '20px',
  },
};

export default function({ title = 'title', description = '', image = '' }) {
  return (
    <div style={style.outer}>
      <PageContent style={style.content}>
        <Row>
          <Col xs={12} sm={6} style={{ textAlign: 'center' }}>
            <img src={image} style={{ width: '60%' }}/>
          </Col>
          <Col xs={12} sm={6} style={{ marginTop: '20px' }}>
            <p className="title">{title}</p>
            <p>{description}</p>
          </Col>
        </Row>
      </PageContent>
    </div>
  );
}