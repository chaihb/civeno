import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import ImageTextContent from '../ImageTextContent';

const style = {
  col: {
    height: '350px',
  },
};

export default function({ data }) {
  return (
    <Grid>
      {data.map((content, index) => (
        <Col key={`image_text_${index}`} style={style.col} md={4} sm={6} xs={6}>
          <ImageTextContent key={`image_text_content_${index}`} {...content}/>
        </Col>
      ))}
    </Grid>
  )
}
