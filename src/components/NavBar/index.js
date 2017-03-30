import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from './NavItem';

export default class extends React.Component {
  state = {
    expanded: false,
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expanded={this.state.expanded}
        style={{ backgroundColor: 'transparent', border: 0 }}
        onToggle={this.toggleExpanded.bind(this)}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" style={{ height: 'auto' }}><h2 style={{ marginTop: '10px' }}><b>CIVENO</b></h2></a>
          </Navbar.Brand>
          <Navbar.Toggle style={{ marginTop: '20px' }}/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight style={{ marginTop: '20px', overflowY: 'hidden' }} onClick={this.closeExpanded.bind(this)}>
            <NavItem text={'首页'} to="/"/>
            <NavItem text={'产品概述'} to="/product"/>
            <NavItem text={'关于我们'} to="/aboutUs"/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  closeExpanded() {
    this.setState({ expanded: false });
  }
}