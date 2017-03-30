import React from 'react';
import PageContent from '../PageContent';
import Row from 'react-bootstrap/lib/Row';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

export default function({ title = 'Title', description = 'description', image = '/resource/item1.png' }) {
  return (
    <PageContent>
      <Row style={{ textAlign: 'center' }}>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <Image src={image}/>
      </Row>
    </PageContent>
  );
}