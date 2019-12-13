import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 120px;
  height: 25px;
  color: #ffffff;
  background-color: ${({ isActive }) => isActive ? '#F65261' : '#232323'};
  opacity:  ${({ isActive }) => isActive ? '0.9' : '0.5'};
  border: none;
  outline: none;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }
`;


export class ToggleButton extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { name, isActive, handleClick } = this.props;
    return (
      <Button isActive={isActive}>
        {name}
      </Button>
    )
  }
}