// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import styled, {css} from 'styled-components'


// export const Tabs = styled.div`
//   display: block;
//   color: pink;

// `

// export const TabList = styled.li`
//   color: red;
// `

// export const Tab = styled.li`
//   color: yellow'
// `

// export const TabPanel = styled.div`
//   color: purple;
// `

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
     
//       <Tabs>
//         <TabList>
//           <Tab>Title 1</Tab>
//           <Tab>Title 2</Tab>
//           <Tab>Title 3</Tab>
//           <Tab>Title 4</Tab>
//           <Tab>Title 5</Tab>
//           <Tab>Title 6</Tab>
//         </TabList>

//         <TabPanel>
//           <h2>Any content 1</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 2</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 3</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 4</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 5</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 6</h2>
//         </TabPanel>
//       </Tabs>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
// import { render } from 'react-dom';

import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';


const StyledTabs = styled(Tabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  width: 40%;
  display: flex;
  margin: 0;
  min-height: 100vh;
`;

const StyledTabList = styled(TabList)`
  margin: 0;
  width: 25%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: black;
`;
StyledTabList.tabsRole = 'TabList';

const StyledTab = styled(Tab)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  min-width: 100%;
  min-height: 7vh;
  user-select: none;
  color: white;
  cursor: arrow;
  background-color: black;
  margin-left: -35%;

  &.is-selected {
    // color: white;
    // background: black;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, .5)
  }

  &:hover {
    border-right: 5px solid red;
  }
`;
StyledTab.tabsRole = 'Tab';

const StyledTabPanel = styled(TabPanel)`
  margin: 0;
  display: none;
  min-height: 60%;
  width: 100%;
  border: 1px solid black;
  color: blue;

  &.is-selected {
    display: block;
  }
`;
StyledTabPanel.tabsRole = 'TabPanel';

const App = () => (
  <StyledTabs
    selectedTabClassName='is-selected'
    selectedTabPanelClassName='is-selected'
  >
    <StyledTabList>
      <StyledTab>Tab 1</StyledTab>
      <StyledTab>Tab 2</StyledTab>
      <StyledTab>Tab 3</StyledTab>
    </StyledTabList>
    <StyledTabPanel>Panel 1</StyledTabPanel>
    <StyledTabPanel>Panel 2</StyledTabPanel>
    <StyledTabPanel>Panel 3</StyledTabPanel>
  </StyledTabs>
);


export default App;