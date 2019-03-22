import React from 'react';
import StyledTabPanel from './tab-panel';
import StyledTabs from './tabs'
import StyledTabList from './tab-list'
import StyledTab from './tab'

import styled from 'styled-components';


export const Tabs = styled(StyledTabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 15px;
  width: ${props => props.vertical ? '30vw' : '100vw'};
  height: ${props => props.vertical ? '100vh' : '15vh'};
  display: flex;
  margin: 0;
  flex-direction: ${props => props.vertical ? 'row' : 'column'};
`


export const TabList = styled(StyledTabList)`
  margin: 0;
  width: ${props => props.vertical ? '25%' : '100%'};
  height: ${props => props.vertical ? '100%' : '100%'};
  display: flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  list-style: none;
  background-color: black;
  padding: 0;
`


export const Tab = styled(StyledTab)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  width: ${props => props.vertical ? '100%' : '20%'};
  height: ${props => props.vertical ? '10%' : '100%'};
  user-select: none;
  color: white;
  cursor: arrow;
  background-color: black;
  
  &:hover { 
    ${props => props.vertical ? 'border-right: 3px solid red' : 'border-bottom: 3px solid red'};
  }
  `


export const TabPanel = styled(StyledTabPanel)`
  margin: 0;
  display: none;
  width: ${props => props.vertical ? '75%' : '100%'};
  border: 1px solid black;
  color: blue;

  &.selected {
    display: block;
  }
  `