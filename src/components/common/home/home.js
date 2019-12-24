import React from 'react';
import { HeaderLayout } from '../common/header';
import { BodyLayout } from '../body';
import { FooterLayout } from '../common/footer';

export const Home = ({
  filmsInfo,
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


export default Home;
