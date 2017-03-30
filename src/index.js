import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './page/Home';
import Product from './page/Product';
import About from './page/About';

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/product" component={Product}/>
        <Route path="/aboutUs" component={About}/>
        <Route component={Home}/>
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
