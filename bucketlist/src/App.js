import React, { Component } from 'react';
import './App.css';
import './Banners.css';
import './Customelements.css';
//import './Style.css';

import Apphero from './components/Apphero';
import NavbarApp from './components/NavbarApp';

class App extends Component {
  
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
          <select name="country" id="countrySelect">
          <option value="" hidden="">Choose a country</option>
                <option value="denmark">Denmark</option>
                <option value="faroeislands">Faroe Islands</option>
                <option value="finland">Finland</option>
                <option value="iceland">Iceland</option>
                <option value="norway">Norway</option>
                <option value="scotland">Scotland</option>
                <option value="sweden">Sweden</option>
                </select>
                <button className="greenBtn buttonWithIcon" id="countrySelected">Let's go <i className="fas fa-angle-right" aria-hidden="true"></i></button>     
        </div>
        <div id="popular">
          {//TO-DO: fetch popular places from the input country
          }
        </div>
        <div id="activities">
          <h2 className="centered">Choose an activity</h2>
          <p className="centered">Choose something you want to do or see, and we will suggest all the right places for it:</p>
          <div className="itemWrapper">
          <button className="activityBtn"><i className="fas fa-hiking" aria-hidden="true"></i> Hiking</button>
          <button className="activityBtn"><i className="fas fa-city" aria-hidden="true"></i> City</button>
          <button className="activityBtn"><i className="fas fa-mountain" aria-hidden="true"></i> Landmark</button>
          <button className="activityBtn"><i className="fas fa-star" aria-hidden="true"></i> Northern lights</button>
          <button className="activityBtn"><i className="fas fa-umbrella-beach" aria-hidden="true"></i>Beaches</button>
          <button className="activityBtn"><i className="fas fa-fish" aria-hidden="true"></i> Other local specialties</button>
          <button className="activityBtn"><i className="fas fa-sun" aria-hidden="true"></i> Only summer trips</button>
          <button className="activityBtn"><i className="fas fa-snowflake" aria-hidden="true"></i> Only winter trips</button>
          </div>
        </div>
        <div id="suggestions">
           {//TO-DO: call the component that fetches the activities/places of the selected button
        }
        </div>
       <h2 className="centered">Still can't find the right place? :(</h2>
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
