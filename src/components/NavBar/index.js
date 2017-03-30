import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from './NavItem';
import Grid from 'react-bootstrap/lib/Grid';

export default function() {
  return (
    <Navbar collapseOnSelect style={{ backgroundColor: 'transparent', border: 0 }}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" style={{ height: 'auto' }}><h2 style={{ marginTop: '10px' }}><b>CIVENO</b></h2></a>
        </Navbar.Brand>
        <Navbar.Toggle style={{ marginTop: '20px' }}/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight style={{ paddingTop: '20px' }}>
          <NavItem text={'首页'} to="/"/>
          <NavItem text={'产品概述'} to="/product"/>
          <NavItem text={'关于我们'} to="/aboutUs"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
