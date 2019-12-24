import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Clearfix } from '../clearfix/clearfix';
import Filter from '../filter/filter';
import { FilmCard } from './film-card';
import { connect } from 'react-redux'
import { sortBy } from '../../../services';


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


  renderCards = (cards, searchString) => {
    let filteredCards;
    if (searchString) {
      filteredCards = cards.filter((card) => card.title.trim().toLowerCase().includes(searchString.trim().toLowerCase()));
    } else {
      filteredCards = cards;
    }

    return filteredCards.map((card) => {
      return <FilmCard card={card} key={card.id} />
    })
  }

  render() {
    const { data, searchString } = this.props;
    return (
      <BodyWrapper>
        <Clearfix alignment={'flex-end'}>
          <Filter title={'Sort By'} firstButton={sortBy.RATING} secondButton={sortBy.RELEASE_DATE} />
        </Clearfix>
        <MainContent isEmpty={!data} >
          {!data && 'No films found'}
          {!!data && this.renderCards(data, searchString)}
        </MainContent>
      </BodyWrapper>
    )
  }
}
