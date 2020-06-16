import React, { Component } from 'react';
import './App.css';
import './Banners.css';
import './Customelements.css';
import ReactDOM from 'react-dom';
//import './Style.css';

import Apphero from './components/Apphero';
import NavbarApp from './components/NavbarApp';
import Norway from './components/Norway';

class App extends Component {

  state = {
    value: "Choose a country"
  }

  selectCountryHandler = (event) => {
    this.setState({
      value: event.target.value
    })

    if (event.target.value === "norway"){
      ReactDOM.render(<Norway />, document.getElementById('popular'));
    }
  }

  render() {
  
  return (
    <div>
      <NavbarApp />
      <div className="bucketlistWrapper closeBucketlist">
        <h3 id="bucketlistTitle">Your bucketlist <i id="arrow" className="fas fa-angle-down onlyMobile" aria-hidden="true"></i></h3>
        <div className="listItem">
          <img src="img/trolltunga.png" alt="static placeholder place img"/>
          <div>
            <h4>Place name</h4>
            <a href="#">Read more</a>
          </div>
          <i className="fas fa-trash-alt" aria-hidden="true"></i>
        </div>
        {//listItem can be a component that gets data with props? so like click on item, and hand down id and respective props to listitem component
        }
        <div className="listItem">
          <img src="img/trolltunga.png" alt="static placeholder place img"/>
          <div>
            <h4>Place name</h4>
            <a href="#">Read more</a>
          </div>
          <i className="fas fa-trash-alt" aria-hidden="true"></i>
        </div>
        <div className="listItem">
          <img src="img/trolltunga.png" alt="static placeholder place img"/>
          <div>
            <h4>Place name</h4>
            <a href="#">Read more</a>
          </div>
          <i className="fas fa-trash-alt" aria-hidden="true"></i>
        </div>
        <div className="listItem">
          <img src="img/trolltunga.png" alt="static placeholder place img"/>
          <div>
            <h4>Place name</h4>
            <a href="#">Read more</a>
          </div>
          <i className="fas fa-trash-alt" aria-hidden="true"></i>
        </div>
      </div>
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
           {//TO-DO: call the component that fetches the activities/places of the selected button
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
