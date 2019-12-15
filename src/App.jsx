import React, { Component } from 'react';
import { HeaderLayout } from './components/header/header';
import { BodyLayout } from './components/body/body';
import { FooterLayout } from './components/footer/footer';
import sampleData from './sampleData.json'
class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderLayout /> 
          <BodyLayout data={sampleData.data}/>
          <FooterLayout />
      </div>
    );
  }
}

export default App;
