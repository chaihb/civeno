import React, {Component} from 'react';
import constant from "../constant/product.json";
import TextContentWithStaticBackground from '../components/TextContentWithStaticBackground';
import TextContentImage from '../components/TextContentImage';

class App extends Component {
  render() {
    return (
      <div>
        <TextContentWithStaticBackground
          title="CIVENO"
          subject={constant.title}
          description={constant.description}
          image={constant.image}
        />
        {
          constant.children.map((data, index) => <TextContentImage key={`product_children_${index}`} {...data}/>)
        }
      </div>
    );
  }
}

export default App;