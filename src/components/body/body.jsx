import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Clearfix } from '../shared/clearfix';
import Filter from '../shared/filter';
 import { FilmCard } from './film-card';

const BodyWrapper = styled.div`
  width: 100vw;
  min-height: 70vh;
  background-color: #232323;
`;

const EmptyContainer = css`
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #ffffff;
`;

const MainContent = styled.div`
  width: 100vw;
  min-height: 65vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around; 
  ${({ isEmpty }) => isEmpty && EmptyContainer}
`;

export class BodyLayout extends Component {
  constructor(props) {
    super(props);
   }


   filterCards = (data, searchValue) =>{

    
   }

  renderCards = (cards) => {
      console.log("Processing renderCards method")
      console.log(cards);
    return cards.map((card) => {
      return <FilmCard card={card} key={card.id}/>
    })
  }

  render() {
    const { data, searchValue } = this.props;

    let filteredData = data.filter(x=>x.Genre == searchValue)

    return (
      <BodyWrapper>
        <Clearfix alignment={'flex-end'}>
          <Filter title={'Sort By'} firstButton={'Release Date'} secondButton={'Rating'} />
        </Clearfix>
        <MainContent isEmpty={!filteredData} >
          {!filteredData && 'No films found'}
          {!!filteredData && this.renderCards(filteredData)}
        </MainContent>
      </BodyWrapper>
    )
  }
}