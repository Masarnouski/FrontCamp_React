import React from 'react';
import styled from 'styled-components';
import Filter from './filter'
import SearchPanel from './search-panel';

const Backgroud = styled.div`
    background-image:url(../assets/header-image.jpg);
    position: relative;
    height: 300px;
    color: white;
`;

const Logo = styled.div`
  text-align:left;
  padding-left: 5vw;
  padding-top: 1vh;
  color: #ff0000;
`;

const Header = () => {
    return (
        <Backgroud >
            <Logo>netflixroulette</Logo>
            <SearchPanel />
        </Backgroud>
    )
}


export default Header;