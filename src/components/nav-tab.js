import React from 'react';
import { Tabs, Tab, TabList, TabPanel} from './nav-tab.style'

const NavTab = props => {
    const vertical = true
  
        return (
          <Tabs
            vertical={vertical}
            selectedTabPanelClassName='selected'
          >
            <TabList vertical={vertical}>
              <Tab vertical={vertical}>Home</Tab>
              <Tab vertical={vertical}>Pay</Tab>
              <Tab vertical={vertical}>Details</Tab>
            </TabList>
            <TabPanel vertical={vertical}>Panel 1</TabPanel>
            <TabPanel vertical={vertical}>Panel 2</TabPanel>
            <TabPanel vertical={vertical}>Panel 3</TabPanel>
          </Tabs>
        )
  };
  
  
  export default NavTab;