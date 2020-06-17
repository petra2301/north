import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Norway extends Component {

    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    noSuggestionErrorMessage = "We don't have any suggestion for this. Try another activity, or get some inspiration from our premade trips.";

displayHikingHandler = () => {
  let hikingContainer = [];
  let hikeWrapper = 
     <div>
        <div className="itemWrapper">
          {hikingContainer}
       </div>
      </div>;   
  for (let i = 0; i < this.state.items.length; i++) {
    let data = {
      "id": `no-${i}`,
      "img": this.state.items[i].gsx$img.$t,
      "imgalt": this.state.items[i].gsx$name.$t,
      "placeName": this.state.items[i].gsx$name.$t,
      "readMore": this.state.items[i].gsx$link.$t
    }             
        if (this.state.items[i].gsx$hiking.$t === "yes" ) {
          let hike = 
            <div className="item">
              <button className="addToListBtn" onClick={() => window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
              <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
              <h3>{this.state.items[i].gsx$name.$t}</h3>
              <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
            </div>;
          hikingContainer.push(hike);
        }
      }
      if (hikingContainer.length===0) {
        hikingContainer.push(<p className="centered">{this.noSuggestionErrorMessage}</p>);
      }
      ReactDOM.render(hikeWrapper, document.getElementById('suggestions'));
        let otherButtons = document.querySelectorAll(".activityBtn");

        [].forEach.call(otherButtons, function(btn) {
            btn.classList.remove("activityBtn-selected");
        });

      document.getElementById('hiking').classList.toggle('activityBtn-selected');      
}

displayCityHandler = () => {
  let cityContainer = [];
  let cityWrapper = 
     <div>
        <div className="itemWrapper">
          {cityContainer}
       </div>
      </div>;   
  for (let i = 0; i < this.state.items.length; i++) {   
    let data = {
      "id": `no-${i}`,
      "img": this.state.items[i].gsx$img.$t,
      "imgalt": this.state.items[i].gsx$name.$t,
      "placeName": this.state.items[i].gsx$name.$t,
      "readMore": this.state.items[i].gsx$link.$t
    }          
        if (this.state.items[i].gsx$city.$t === "yes" ) {
          let city = 
            <div className="item">
              <button className="addToListBtn" onClick={()=> window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
              <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
              <h3>{this.state.items[i].gsx$name.$t}</h3>
              <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
            </div>;
          cityContainer.push(city);
        }
      }
      if (cityContainer.length===0) {
        cityContainer.push(<p className="centered">{this.noSuggestionErrorMessage}</p>);
      }
      ReactDOM.render(cityWrapper, document.getElementById('suggestions'));
        let otherButtons = document.querySelectorAll(".activityBtn");

        [].forEach.call(otherButtons, function(btn) {
            btn.classList.remove("activityBtn-selected");
        });

      document.getElementById('city').classList.toggle('activityBtn-selected');    
}

displayLandmarkHandler = () => {
  let landmarkContainer = [];
  let landmarkWrapper = 
     <div>
        <div className="itemWrapper">
          {landmarkContainer}
       </div>
      </div>;   
  for (let i = 0; i < this.state.items.length; i++) {            
    let data = {
      "id": `no-${i}`,
      "img": this.state.items[i].gsx$img.$t,
      "imgalt": this.state.items[i].gsx$name.$t,
      "placeName": this.state.items[i].gsx$name.$t,
      "readMore": this.state.items[i].gsx$link.$t
    } 
        if (this.state.items[i].gsx$landmark.$t === "yes" ) {
          let landmark = 
            <div className="item">
              <button className="addToListBtn"  onClick={()=> window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
              <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
              <h3>{this.state.items[i].gsx$name.$t}</h3>
              <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
            </div>;
          landmarkContainer.push(landmark);
        }
      }
      if (landmarkContainer.length===0) {
        landmarkContainer.push(<p className="centered">{this.noSuggestionErrorMessage}</p>);
      }
      ReactDOM.render(landmarkWrapper, document.getElementById('suggestions'));
        let otherButtons = document.querySelectorAll(".activityBtn");

        [].forEach.call(otherButtons, function(btn) {
            btn.classList.remove("activityBtn-selected");
        });

      document.getElementById('landmark').classList.toggle('activityBtn-selected');    
}

displayNorthernLightsHandler = () => {
  let lightsContainer = [];
  let lightsWrapper = 
     <div>
        <div className="itemWrapper">
          {lightsContainer}
       </div>
      </div>;   
  for (let i = 0; i < this.state.items.length; i++) {    
    let data = {
      "id": `no-${i}`,
      "img": this.state.items[i].gsx$img.$t,
      "imgalt": this.state.items[i].gsx$name.$t,
      "placeName": this.state.items[i].gsx$name.$t,
      "readMore": this.state.items[i].gsx$link.$t
    }          
        if (this.state.items[i].gsx$northernlights.$t === "yes" ) {
          let light = 
            <div className="item">
              <button className="addToListBtn"  onClick={()=> window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
              <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
              <h3>{this.state.items[i].gsx$name.$t}</h3>
              <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
            </div>;
          lightsContainer.push(light);
        }
      }
      if (lightsContainer.length===0) {
        lightsContainer.push(<p className="centered">{this.noSuggestionErrorMessage}</p>);
      }
      ReactDOM.render(lightsWrapper, document.getElementById('suggestions'));
        let otherButtons = document.querySelectorAll(".activityBtn");

        [].forEach.call(otherButtons, function(btn) {
            btn.classList.remove("activityBtn-selected");
        });

      document.getElementById('landmark').classList.toggle('activityBtn-selected');    
}

displayBeachHandler = () => {
  let beachContainer = [];
  let beachWrapper = 
     <div>
        <div className="itemWrapper">
          {beachContainer}
       </div>
      </div>;   
  for (let i = 0; i < this.state.items.length; i++) {    
    let data = {
      "id": `no-${i}`,
      "img": this.state.items[i].gsx$img.$t,
      "imgalt": this.state.items[i].gsx$name.$t,
      "placeName": this.state.items[i].gsx$name.$t,
      "readMore": this.state.items[i].gsx$link.$t
    }          
        if (this.state.items[i].gsx$beach.$t === "yes" ) {
          let beach = 
            <div className="item">
              <button className="addToListBtn" onClick={()=> window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
              <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
              <h3>{this.state.items[i].gsx$name.$t}</h3>
              <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
            </div>;
          beachContainer.push(beach);
        }
      }
      if (beachContainer.length===0) {
        beachContainer.push(<p className="centered">{this.noSuggestionErrorMessage}</p>);
      }
      ReactDOM.render(beachWrapper, document.getElementById('suggestions'));
        let otherButtons = document.querySelectorAll(".activityBtn");

        [].forEach.call(otherButtons, function(btn) {
            btn.classList.remove("activityBtn-selected");
        });

      document.getElementById('beach').classList.toggle('activityBtn-selected');    
}

displayOthersHandler = () => {
  let otherContainer = [];
  let otherWrapper = 
     <div>
        <div className="itemWrapper">
          {otherContainer}
       </div>
      </div>;   
  for (let i = 0; i < this.state.items.length; i++) {     
    let data = {
      "id": `no-${i}`,
      "img": this.state.items[i].gsx$img.$t,
      "imgalt": this.state.items[i].gsx$name.$t,
      "placeName": this.state.items[i].gsx$name.$t,
      "readMore": this.state.items[i].gsx$link.$t
    }         
        if (this.state.items[i].gsx$other.$t === "yes" ) {
          let other = 
            <div className="item">
              <button className="addToListBtn" onClick={()=> window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
              <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
              <h3>{this.state.items[i].gsx$name.$t}</h3>
              <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
            </div>;
          otherContainer.push(other);
        }
      }
      if (otherContainer.length===0) {
        otherContainer.push(<p className="centered">{this.noSuggestionErrorMessage}</p>);
      }
      ReactDOM.render(otherWrapper, document.getElementById('suggestions'));
        let otherButtons = document.querySelectorAll(".activityBtn");

        [].forEach.call(otherButtons, function(btn) {
            btn.classList.remove("activityBtn-selected");
        });

      document.getElementById('other').classList.toggle('activityBtn-selected');    
}

displaySummertripsHandler = () => {
  let summertripsContainer = [];
  let summertripsWrapper = 
     <div>
        <div className="itemWrapper">
          {summertripsContainer}
       </div>
      </div>;   
  for (let i = 0; i < this.state.items.length; i++) { 
        let data = {
          "id": `no-${i}`,
          "img": this.state.items[i].gsx$img.$t,
          "imgalt": this.state.items[i].gsx$name.$t,
          "placeName": this.state.items[i].gsx$name.$t,
          "readMore": this.state.items[i].gsx$link.$t
        }         
        if (this.state.items[i].gsx$summer.$t === "yes" ) {
          let summertrip = 
            <div className="item">
              <button className="addToListBtn" onClick={()=> window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
              <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
              <h3>{this.state.items[i].gsx$name.$t}</h3>
              <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
            </div>;
          summertripsContainer.push(summertrip);
        }
      }
      if (summertripsContainer.length===0) {
        summertripsContainer.push(<p className="centered">{this.noSuggestionErrorMessage}</p>);
      }
      ReactDOM.render(summertripsWrapper, document.getElementById('suggestions'));
        let otherButtons = document.querySelectorAll(".activityBtn");

        [].forEach.call(otherButtons, function(btn) {
            btn.classList.remove("activityBtn-selected");
        });

      document.getElementById('summer').classList.toggle('activityBtn-selected');    
}


displayWintertripsHandler = () => {
  let wintertripsContainer = [];
  let wintertripsWrapper = 
     <div>
        <div className="itemWrapper">
          {wintertripsContainer}
       </div>
      </div>;   
  for (let i = 0; i < this.state.items.length; i++) {  
    let data = {
      "id": `no-${i}`,
      "img": this.state.items[i].gsx$img.$t,
      "imgalt": this.state.items[i].gsx$name.$t,
      "placeName": this.state.items[i].gsx$name.$t,
      "readMore": this.state.items[i].gsx$link.$t
    }            
        if (this.state.items[i].gsx$winter.$t === "yes" ) {
          let wintertrip = 
            <div className="item">
              <button className="addToListBtn" onClick={()=> window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
              <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
              <h3>{this.state.items[i].gsx$name.$t}</h3>
              <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
            </div>;
          wintertripsContainer.push(wintertrip);
        }
      }
      if (wintertripsContainer.length===0) {
        wintertripsContainer.push(<p className="centered">{this.noSuggestionErrorMessage}</p>);
      }
      ReactDOM.render(wintertripsWrapper, document.getElementById('suggestions'));
        let otherButtons = document.querySelectorAll(".activityBtn");

        [].forEach.call(otherButtons, function(btn) {
            btn.classList.remove("activityBtn-selected");
        });

      document.getElementById('winter').classList.toggle('activityBtn-selected');    
}

    componentDidMount() {

    fetch("https://spreadsheets.google.com/feeds/list/1Sc2_X6hUCPjU851rcHNCmJOh6JrrDnuTwlmBlCT-HhY/1/public/values?alt=json")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            items: data.feed.entry
          }, ()=> {window.bucket.reuseJSONData(this.state.items)});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        },
      )
}


    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div><p className="centered">Loading...</p></div>;
        }
        else {
          let itemContainer = [];
          for (let i = 0; i < this.state.items.length; i++) {
            let data = {
              "id": `no-${i}`,
              "img": this.state.items[i].gsx$img.$t,
              "imgalt": this.state.items[i].gsx$name.$t,
              "placeName": this.state.items[i].gsx$name.$t,
              "readMore": this.state.items[i].gsx$link.$t
            }            
            if (this.state.items[i].gsx$popular.$t === "yes" ) {
              let item = 
                <div className="item">
                  <button className="addToListBtn" onClick={() => window.bucket.addDiv(data)}><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
                  <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
                  <h3>{this.state.items[i].gsx$name.$t}</h3>
                  <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
                </div>;
              itemContainer.push(item);
            }
          }
          if (itemContainer.length===0) {
            itemContainer.push(<div>No items.</div>);
          }
          let wrapper = 
            <div>
              <h2 className="centered topMargin">Most popular places in Norway</h2>
              <div className="itemWrapper">
                {itemContainer}
              </div>
            </div>              
            return (
              <div>
              {wrapper}
              <div id="activities">
                <h2 className="centered topMargin">Choose an activity</h2>
                <p className="centered">Choose something you want to do or see, and we will suggest all the right places for it:</p>
                <div className="itemWrapper">
                  <button className="activityBtn" id="hiking" onClick={this.displayHikingHandler}><i className="fas fa-hiking" aria-hidden="true"></i> Hiking</button>
                  <button className="activityBtn" id="city" onClick={this.displayCityHandler}><i className="fas fa-city" aria-hidden="true"></i> City</button>
                  <button className="activityBtn" id="landmark" onClick={this.displayLandmarkHandler}><i className="fas fa-mountain" aria-hidden="true"></i> Landmark</button>
                  <button className="activityBtn" id="northernlights" onClick={this.displayNorthernLightsHandler}><i className="fas fa-star" aria-hidden="true"></i> Northern lights</button>
                  <button className="activityBtn" id="beach" onClick={this.displayBeachHandler}><i className="fas fa-umbrella-beach" aria-hidden="true"></i>Beaches</button>
                  <button className="activityBtn" id="other" onClick={this.displayOthersHandler}><i className="fas fa-fish" aria-hidden="true"></i> Other local specialties</button>
                  <button className="activityBtn" id="summer" onClick={this.displaySummertripsHandler}><i className="fas fa-sun" aria-hidden="true"></i> Only summer trips</button>
                  <button className="activityBtn" id="winter" onClick={this.displayWintertripsHandler}><i className="fas fa-snowflake" aria-hidden="true"></i> Only winter trips</button>
                </div>
                <div id="suggestions"></div>
              </div>
              </div>

            )
        }

      }
}
    

export default Norway