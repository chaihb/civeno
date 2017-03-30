import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const style = {
  row({ image }){
    return {
      minHeight: '400px',
      backgroundImage: `url("${image}")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  },
  col: {
    padding: '20px',
    textAlign: 'left',
    paddingTop: '10%',
  },
};

export default function({ title = 'Title', description = 'description', image }) {
  return (
    <Grid>
      <Row style={style.row({ image })}>
        <Col sm={6} smOffset={1} style={style.col}>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </Col>
      </Row>
    </Grid>
  );
}