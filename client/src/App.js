import React, { Component } from 'react';
import Cookies from 'cookies-js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cookieCounter: this.currentCookies()
    }
    this.addCookie = this.addCookie.bind(this);
    this.clearCookies = this.clearCookies.bind(this);
  }

  currentCookies() {
    return Cookies.get('key') || 0;
  }

  setCookieState() {
    this.setState({
      cookieCounter: this.currentCookies()
    });
  }

  addCookie(){
    Cookies.set('key', parseInt(this.state.cookieCounter, 10) + 1);
    this.setCookieState();
  }

  clearCookies() {
    Cookies.expire('key')
    this.setCookieState();
  }

// addMoreCookies(){
// let additionalCookies = document.getElementById('cValue').value;
//   Cookies.set('key', parseInt(this.state.cookieCounter, additionalCookies));
// }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">TIME FOR SOME COOKIES</h1>
        </header>
        <h2> How many cookies do i have?: {this.state.cookieCounter}</h2>
        <button onClick ={this.addCookie}> Give me the cookies</button>
        <button onClick = {this.clearCookies}> Dump them </button>
        <br></br>
        // <form className="addMoreCookies"> How many do you want to add? <input type="number" id='cValue'/>
        // <input type="submit" value="submit"/> </form>
        // <button onClick = {this.addMoreCookies}> add them </button>


      </div>
    );
  }
}

export default App;
