import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const style = {
  background(background){
    return {
      backgroundImage: `url("${background}")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    }
  },
  row: {
    backgroundColor: 'rgba(255,255,255,.4)',
  },
  col: {
    textAlign: 'center',
    paddingTop: '10%',
    paddingBottom: '12%',
  },
};

export default function({ title = '', subject = '', description = '', image }) {
  return (
    <div style={style.background(image)}>
      <Row style={style.row}>
        <Col style={style.col}>
          <p className="title">{title}</p>
          <h2><b>{subject}</b></h2>
          <p className="description">{description}</p>
        </Col>
      </Row>
    </div>
  );
}