import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

const style = {
  grid: {
    marginBottom: '20px',
  },
  row: {
    textAlign: 'center',
  },
};

export default function({ title = 'Title', description = '' }) {
  return (
    <Grid style={style.grid}>
      <Row style={style.row}>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </Row>
    </Grid>
  );
}