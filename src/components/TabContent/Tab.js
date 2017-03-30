import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Tab = styled(Col)`
  cursor: pointer;
  text-align: center;
  
  &:hover::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    content: '';
    border-bottom: 3px solid rgb(0, 180, 255);
  }
`;

function getTabStyle(isSelected) {
  return {
    padding: '20px',
    color: isSelected ? 'white' : 'rgb(0, 180, 255)',
    backgroundColor: isSelected ? 'rgb(0, 180, 255)' : 'white',
  };
}

export default function({ tabs, selectedTabTitle, onTabSelect }) {
  return (
    <Grid style={{ marginBottom: '50px' }}>
      <Row>
        <Col sm={8} smOffset={2} xs={12}>
          {tabs.map(({ title }, index) =>
            <Tab
              xs={4} sm={3} smOffset={1}
              key={`about_${index}`}
              style={getTabStyle(title === selectedTabTitle)}
              onClick={() => onTabSelect(title)}
            >
              {title}
            </Tab>
          )}
        </Col>
      </Row>
    </Grid>
  );
}