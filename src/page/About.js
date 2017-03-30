import React, {Component} from 'react';
import constant from "../constant/about.json";
import TabContent from '../components/TabContent';

class App extends Component {
  render() {
    return (
      <div>
        <img style={{ width: '100%' }} src={constant.image}/>
        <TabContent tabs={constant.children}/>
      </div>
    );
  }
}

export default App;