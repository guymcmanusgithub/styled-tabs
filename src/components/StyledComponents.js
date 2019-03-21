import styled from 'styled-components';

export const Tabs = styled.div`
    -webkit-tap-highlight-color: transparent;
`


export const TabList = styled.ul`
    border-bottom: 1px solid #aaa;
    margin: 0 0 10px;
    padding: 0;
`
  

export const Tab = styled.li`
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;

    &:selected {
        background: #fff;
        border-color: #aaa;
        color: purple;
        border-radius: 5px 5px 0 0;
    }

    &:disabled {
        color: GrayText;
        cursor: default;
    }

    &:focus {
        box-shadow: 0 0 5px hsl(208, 99%, 50%);
        border-color: hsl(208, 99%, 50%);
        outline: none;
    }

    &:focus:after {
        content: "";
        position: absolute;
        height: 5px;
        left: -4px;
        right: -4px;
        bottom: -5px;
        background: #fff;
    }
`


export const TabPanel = styled.div`
    display: none;

    &:selected {
        display: block;
    }
`
  
 