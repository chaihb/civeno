import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CustomLink = styled(Link)`
  padding: 10px 5px;
  display: block;
  color: #222;
  text-decoration: none !important;
  margin-left: 20px !important;
  
  &:hover{
    color: rgb(0, 180, 255);
    text-decoration: none;
  }
`;

function pageStyle(to) {
  const path = window.location.pathname;
  if (path === to) {
    return {
      color: 'rgb(0, 180, 255)',
    };
  }
  return {};
}

export default function({ text, to = '/' }) {
  return <CustomLink className="nav navbar-nav h4" to={to} style={pageStyle(to)}>{text}</CustomLink>
}