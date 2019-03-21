import React, { useState } from 'react';
// import { render } from 'react-dom';
import { TabPanel as StyledTabPanel } from './TabPanel';
import { Tabs as StyledTabs } from 'react-tabs'
import { TabList as StyledTabList } from 'react-tabs'
import { Tab as StyledTab } from 'react-tabs'

import styled from 'styled-components';


const Tabs = styled(StyledTabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  width: ${props => props.vertical ? '40%' : '100vw'};
  height: ${props => props.vertical ? '100vh' : '10vh'};
  display: flex;
  margin: 0;
  background-color: ${props => props.vertical ? 'red' : 'black'};
`
Tabs.tabsRole = 'Tabs'


const TabList = styled(StyledTabList)`
  margin: 0;
  width: ${props => props.vertical ? '15%' : '100%'};
  height: ${props => props.vertical ? '100%' : '100%'};
  display: flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  list-style: none;
  background-color: blue;
`
StyledTabList.tabsRole = 'TabList';


const Tab = styled(StyledTab)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  width: ${props => props.vertical ? '100%' : '30%'};
  height: ${props => props.vertical ? '10%' : '100%'};
  user-select: none;
  color: white;
  cursor: arrow;
  background-color: ${props => props.vertical ? 'black' : 'black'};
  margin-left: ${props => props.vertical ? '-53%' : '0'};
  
  &:hover { 
    ${props => props.vertical ? 'border-right: 5px solid red' : 'border-bottom: 5px solid red'};
  }

  // &:hover {
  //   border-right: 5px solid red;
  // }
  `
StyledTab.tabsRole = 'Tab';


const TabPanel = styled(StyledTabPanel)`
  margin: 0;
  display: none;
  min-height: 60%;
  width: 60%;
  border: 1px solid black;
  color: blue;
  `
StyledTabPanel.tabsRole = 'TabPanel';






const NavTab = props => {

  const { vertical } = props

      return (
        <Tabs
          vertical={vertical}
        >
          <TabList vertical={vertical}>
            <Tab vertical={vertical}>Tab 1</Tab>
            <Tab vertical={vertical}>Tab 2</Tab>
            <Tab vertical={vertical}>Tab 3</Tab>
          </TabList>
          <TabPanel vertical={vertical}>Panel 1</TabPanel>
          <TabPanel vertical={vertical}>Panel 2</TabPanel>
          <TabPanel vertical={vertical}>Panel 3</TabPanel>
        </Tabs>
      )
};


export default NavTab;