import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Text = styled.h5`
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
  padding: 8px 10px;
  margin: 0 10px;
  left: 0;
  right: 0;
  color: white;
  text-align: left;
`;

export default function({ title = 'title', image = '' }) {
  return (
    <Col xs={6} sm={3} style={{ padding: '0px 10px', marginBottom:'20px' }}>
      <div>
        <img src={image} style={{ width: '100%' }}></img>
        <Text>{title}</Text>
      </div>
    </Col>
  );
}