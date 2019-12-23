import React, { Component } from 'react';
import { HeaderLayout } from './components/header/header';
import BodyLayout from './components/body/body';
import { FooterLayout } from './components/footer/footer';
import sampleData from './sampleData.json'
export const App = ({
  filmsInfo,
  onClickTabButton,
  textInputValue,
  changeTextInputValue,
  onClickSubmitButton,
}) => {
  return (
    <div className="App">
      <HeaderLayout 
        onClickSubmitButton={onClickSubmitButton} 
        changeTextInputValue={changeTextInputValue} 
        textInputValue={textInputValue}
        />
      <BodyLayout data={filmsInfo} />
      <FooterLayout />
    </div>
  );
}


export default App;
