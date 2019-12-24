import React from 'react';
import  { BodyLayout, FooterLayout, HeaderLayout } from '../../components'

export const Home = ({
  filmsInfo,
  textInputValue,
  changeTextInputValue,
  onClickSubmitButton,
}) => {
  return (
    <div>
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
