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

  setActiveButton = () => {
    console.log();
  }

  getIsActive(order) {
    console.log("Pashet")
    const { activeButton } = this.state;

    return activeButton === order;
  }



  render() {
    const { title, firstButton, secondButton} = this.props;

    return (
      <FilterWrapper>
        <Title>{title}</Title>
        <ToggleButton isActive={this.getIsActive(1)} handleClick={this.setActiveButton(1)} name={firstButton}/>
        <ToggleButton isActive={this.getIsActive(2)} handleClick={this.setActiveButton(2)} name={secondButton} />
      </FilterWrapper>
    );
  }

}