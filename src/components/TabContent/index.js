import React from 'react';
import Tab from './Tab';
import Content from './Content';
import PageContent from '../PageContent';
import _ from 'lodash';

export default class extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    const { tabs } = props;
    this.state = {
      selectedTabTitle: _.get(tabs, '0.title')
    }
  }

  render() {
    const { tabs } = this.props;
    const { selectedTabTitle } = this.state;
    return (
      <PageContent>
        <Tab tabs={tabs} selectedTabTitle={selectedTabTitle} onTabSelect={this.onTabSelecte.bind(this)}/>
        <Content text={this.getSelectedTabContent()}/>
      </PageContent>
    );
  }

  getSelectedTabContent() {
    const { tabs } = this.props;
    const { selectedTabTitle } = this.state;
    return _.chain(tabs).find(tab => tab.title === selectedTabTitle).get('description', '').value();
  }

  onTabSelecte(tabTitle) {
    this.setState({ selectedTabTitle: tabTitle });
  }
}