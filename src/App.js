import React, { Component } from 'react';
import './App.css';
import  RegisterUser  from './components/register/register.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <RegisterUser/>
      </div>
    );
  }
}

export default App;
