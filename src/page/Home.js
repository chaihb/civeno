import React, {Component} from 'react';
import constant from "../constant/home.json";
import TextContentWithBackground from '../components/TextContentWithBackground';
import TextContent from '../components/TextContent';
import ImageTextContainer from '../components/ImageTextContainer';
import ImageTextHorizontal from '../components/ImageTextHorizontal';
import TextWithImageBackground from '../components/TextWithImageBackground';
import PageContent from '../components/PageContent';
import Row from 'react-bootstrap/lib/Row';

class App extends Component {
  render() {
    return (
      <div>
        <TextContentWithBackground {...constant.titleContent} />
        <TextContent title={constant.projectManger.title} description={constant.projectManger.description}/>
        <ImageTextContainer data={constant.projectManger.children}/>
        <ImageTextHorizontal {...constant.MeetManger}/>
        <TextContent {...constant.MeetType}/>
        <PageContent>
          <Row>
            {constant.MeetType.children.map(
              (data, index) => <TextWithImageBackground key={`meet_type_children_${index}`} {...data} />
            )}
          </Row>
        </PageContent>
      </div>
    );
  }
}

export default App;