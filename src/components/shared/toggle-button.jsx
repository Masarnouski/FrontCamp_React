import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ButtonLabel = styled.label`
  width: 140px;
  height: 25px;
  padding-top: 3px;
  color: #ffffff;
  background-color: #232323;
  opacity:  0.7;
  border: none;
  outline: none;
  border-radius: 2px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  &:checked {
    background-color: #F65261;
  }
`;

const Button = styled.input`
  display: none;
  &:checked + ${ButtonLabel} {
    background-color: #F65261;
    opacity: 1;
  }
`;

export class ToggleButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { name, id, active, onClick } = this.props;
    console.log(this.props)
    return (
      <Fragment>
        <Button onChange={onClick} type="radio" name={name} id={id} defaultChecked={ active ? 'checked' : 'disabled' }/>
        <ButtonLabel htmlFor={id}>{id}</ButtonLabel>
      </Fragment>
      
    )
  }

}