import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width:60px;
  
  &:hover{
    width:80px;
  }
`;

const TableDiv = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const TableCell = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align:center;
    height:175px;
`;

export default  function({ src }) {
  return (
    <TableDiv>
      <TableCell>
        <Img src={src}/>
      </TableCell>
    </TableDiv>
  );
}