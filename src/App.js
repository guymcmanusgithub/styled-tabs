import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel, TabStyle } from 'react-tabs';
// import "../node_modules/react-tabs/style/react-tabs.css"
import styled from 'styled-components'

const Heading = styled(Tab)`
  color: red;
`

class App extends Component {
  render() {
    return (
        <Tabs>
          <TabList>
            <Heading>Title 1</Heading>
            <Heading>Title 2</Heading>
          </TabList>
      
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
    );
  }
}

export default App;
