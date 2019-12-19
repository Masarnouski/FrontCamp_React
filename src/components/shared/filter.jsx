import React, { Component } from 'react';
import styled from 'styled-components';
import { ToggleButton } from './toggle-button';
import { SearchByFilters } from '../../actions'

const FilterWrapper = styled.div`
  display: flex;
  width: 25vw;
`;

const Title = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 100;
  padding-right: 15px;
`;

export default class Filter extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 1
    }
  }

  render() {
    const { title, firstButton, secondButton } = this.props;
    return (
      <FilterWrapper>
        <Title>{title}</Title>
        <ToggleButton id={SearchByFilters.TITLE} name={title}  />
        <ToggleButton id={SearchByFilters.GENRE} name={title}  />
      </FilterWrapper>
    );
  }
}
