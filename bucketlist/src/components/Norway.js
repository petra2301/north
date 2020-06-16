import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Norway extends Component {

    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    placesList = "https://spreadsheets.google.com/feeds/list/1Sc2_X6hUCPjU851rcHNCmJOh6JrrDnuTwlmBlCT-HhY/1/public/values?alt=json";

    displayHikingHandler = () => {
      console.log(this.state.items[0].gsx$hiking.$t)
      let hikingContainer = [];
      let hikeWrapper = 
         <div>
            <div className="itemWrapper">
              {hikingContainer}
           </div>
          </div>;   
      for (let i = 0; i < this.state.items.length; i++) {            
            if (this.state.items[i].gsx$hiking.$t === "yes" ) {
              let hike = 
                <div className="item">
                  <button className="addToListBtn"><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
                  <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
                  <h3>{this.state.items[i].gsx$name.$t}</h3>
                  <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
                </div>;
              hikingContainer.push(hike);
            }
          }
          if (hikingContainer.length===0) {
            hikingContainer.push(<div>No items.</div>);
          }
          ReactDOM.render(hikeWrapper, document.getElementById('suggestions'));
          document.getElementById('hiking').classList.toggle('activityBtn-selected');

           
  }

    componentDidMount() {

    fetch("https://spreadsheets.google.com/feeds/list/1Sc2_X6hUCPjU851rcHNCmJOh6JrrDnuTwlmBlCT-HhY/1/public/values?alt=json")
      .then(res => res.json())
      .then(
        //data => console.log(data.feed.entry));}
        (data) => {
          this.setState({
            isLoaded: true,
            items: data.feed.entry
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
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
            if (this.state.items[i].gsx$popular.$t === "yes" ) {
              let item = 
                <div className="item">
                  <button className="addToListBtn"><i className="fas fa-plus-circle"></i>Add to my bucketlist</button>
                  <img src={this.state.items[i].gsx$img.$t} alt={this.state.items[i].gsx$name.$t}/>
                  <h3>{this.state.items[i].gsx$name.$t}</h3>
                  <a href={this.state.items[i].gsx$link.$t} target="_blank" className="greenBtn">Read more</a>
                </div>;
              itemContainer.push(item);
            }
          }
          if (itemContainer.length===0) {
            itemContainer.push(<div>Ni items.</div>);
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
                  <button className="activityBtn"><i className="fas fa-city" aria-hidden="true"></i> City</button>
                  <button className="activityBtn"><i className="fas fa-mountain" aria-hidden="true"></i> Landmark</button>
                  <button className="activityBtn"><i className="fas fa-star" aria-hidden="true"></i> Northern lights</button>
                  <button className="activityBtn"><i className="fas fa-umbrella-beach" aria-hidden="true"></i>Beaches</button>
                  <button className="activityBtn"><i className="fas fa-fish" aria-hidden="true"></i> Other local specialties</button>
                  <button className="activityBtn"><i className="fas fa-sun" aria-hidden="true"></i> Only summer trips</button>
                  <button className="activityBtn"><i className="fas fa-snowflake" aria-hidden="true"></i> Only winter trips</button>
                </div>
                <div id="suggestions"></div>
              </div>
              </div>

            )
        }

      }
}
    

export default Norway