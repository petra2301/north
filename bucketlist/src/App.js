import React, { Component } from 'react';
import './App.css';
import './Banners.css';
import './Customelements.css';
import ReactDOM from 'react-dom';
//import './Style.css';

import Apphero from './components/Apphero';
import NavbarApp from './components/NavbarApp';
import Denmark from './components/Denmark';
import Faroeislands from './components/Faroeislands';
import Finland from './components/Finland';
import Iceland from './components/Iceland';
import Norway from './components/Norway';
import Scotland from './components/Scotland';
import Sweden from './components/Sweden';
import Bucketlist from './components/Bucketlist';

class App extends Component {

  state = {
    value: "Choose a country"
  }

  selectCountryHandler = (event) => {
    this.setState({
      value: event.target.value
    })

    if (event.target.value === "denmark"){
      ReactDOM.render(<Denmark />, document.getElementById('popular'));
    } else if (event.target.value === "faroeislands"){
      ReactDOM.render(<Faroeislands />, document.getElementById('popular'));
    } else if (event.target.value === "finland"){
      ReactDOM.render(<Finland />, document.getElementById('popular'));
    } else if (event.target.value === "iceland"){
      ReactDOM.render(<Iceland />, document.getElementById('popular'));
    } else if (event.target.value === "norway"){
      ReactDOM.render(<Norway ref={(Norway) => {window.Norway = Norway}}/>, document.getElementById('popular'));
    } else if (event.target.value === "scotland"){
      ReactDOM.render(<Scotland />, document.getElementById('popular'));
    } else if (event.target.value === "sweden"){
      ReactDOM.render(<Sweden />, document.getElementById('popular'));
    }
  }

  render() {
  
  return (
    <div>
      <NavbarApp />
      <Bucketlist ref={(bucket) => {window.bucket = bucket}}/>
      <Apphero />
      <div className="appWrapper">
        <h2 className="centered">Choose a country:</h2>
        <div className="dropdownWrapper">
          <label className="centered" htmlFor="countrySelect">First, choose the country you're visiting.<br/>Don't worry, you can always add other countries to your bucketlist later.</label>
          <br/>
          <select name="countrySelect" id="countrySelect" ref="countrySelect"
          onChange={this.selectCountryHandler}>
          <option value="" hidden="">Choose a country</option>
                <option value="denmark">Denmark</option>
                <option value="faroeislands">Faroe Islands</option>
                <option value="finland">Finland</option>
                <option value="iceland">Iceland</option>
                <option value="norway">Norway</option>
                <option value="scotland">Scotland</option>
                <option value="sweden">Sweden</option>
                </select>
        </div>
        <div id="popular">
          {//the selected country's popular places will be rendered here by an eventhandler
          }
        </div>
        <div id="suggestions">
           {//the selected countries' filtered activities/places will be rendered here
        }
        </div>
       <h2 className="centered">Can't find the right place? :(</h2>
       <p className="centered">We have put together some roadtrip ideas on our <a href="http://petra-sandbox.github.io/north/trips.html">TRIPS</a> page. Check them out for inspiration:</p>
       {//TO-DO: make this button go to the trips page
       }
       <button className="greenBtn buttonWithIcon" onClick={event =>  window.location.href="http://petra-sandbox.github.io/north/trips.html"}>See roadtrip ideas <i className="fas fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>
  );
}
}

export default App;
