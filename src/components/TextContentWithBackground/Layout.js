import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';

const style = {
  row({ background }){
    return {
      minHeight: '400px',
      backgroundImage: `url("${background}")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  },
  smCol: {
    padding: '20px',
    textAlign: 'left',
    paddingTop: '10%',
  },
  xsCol: {
    padding: '10% 20px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,.05)',
  }
};

export default function({ children, background }) {
  return (
    <Row>
      <Col xsHidden>
        <Row style={style.row({ background })}>
          <Grid>
            <Col sm={6} smOffset={1} style={style.smCol}>
              {children}
            </Col>
          </Grid>
        </Row>
      </Col>
      <Col smHidden mdHidden lgHidden sm={6} smOffset={1} style={style.xsCol}>
        {children}
      </Col>
    </Row>
  );
}