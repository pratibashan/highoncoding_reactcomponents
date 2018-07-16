import React, { Component } from 'react';
import { Menu } from './components/Menu';
import { Content} from './components/Content';
import logo from './logo.svg';
import './App.css';
import './Styles.css'

class App extends Component {
  render() {
    return (
     
      <div id="container">
         <Menu/>
         <Content/>
         
      </div>
     
    );
  }
}

export default App;
