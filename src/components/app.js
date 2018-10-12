import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import Description from './description';


class App extends Component {
  render() {
    return (
      <div className='app'>
      <div className="app__parallax">

        <Header/>
        <Description/>
        <Footer/>
      </div>
      </div>
    );
  }
}

export default App;