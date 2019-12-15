import React, { Component } from 'react';
import styled from 'styled-components';
import { ToggleButton } from './toggle-button';

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

  setActiveButton = (e) => {
    console.log(e.target.id);
  }

  render() {
    const { title, firstButton, secondButton} = this.props;

    return (
      <FilterWrapper>
        <Title>{title}</Title>
        <ToggleButton handleChange={this.setActiveButton} id={firstButton} name={title} isCheckedByDefault />
        <ToggleButton handleChange={this.setActiveButton} id={secondButton} name={title} />
      </FilterWrapper>
    );
  }

}