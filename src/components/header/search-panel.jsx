import React from 'react';
import styled from 'styled-components';
import Filter from './filter'

const Header = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 100;
  padding-bottom: 3vh;
  text-align: left;
`;

const Form = styled.form`
    display:flex;
    padding-bottom: 2vh;
    `;

const Button = styled.button`
    background: #F65261;
    border: none;
    border-radius: 3px;
    margin-left: 2vh;
    width:8vw;
    `;

const InputField = styled.input`
    background-color: #555555;
    color: white;
    border-radius: 3px;
    border: none;
    opacity:0.9;
    width: 70vw;
    height:4vh;
    padding-bottom: 1vh;
    `;

const Wrapper =  styled.div`
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%,-50%);
`;


function addItem(e) {

    e.preventDefault();

    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");
    console.log(newItem.value)

}

const SearchPanel = () => {
    return (
        <Wrapper className="wrapper">
            <Header>Find your movie</Header>
            <Form>
                <InputField />
                <Button onClick={addItem}>SEARCH</Button>
            </Form>
            <Filter title={'Search By'} firstButton={'Title'} secondButton={'Genre'} />
        </Wrapper>
    )
}

export default SearchPanel;
