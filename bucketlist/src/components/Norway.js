import React, { Component } from 'react';

class Norway extends Component {

    state = {
        error: null,
        isLoaded: false,
        items: []
    };

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
            <div id="popular">
              <h2 className="centered">Most popular places in Norway</h2>
              <div className="itemWrapper">
                {itemContainer}
              </div>
            </div>              
            return wrapper;
        }

          //v{
         // console.log(this.state.items[0].gsx$popular.$t);

         // console.log(this.state.items);

          //this state items forEach --> check if popular is yes --> if yes --> return
          //this.state.items.forEach(places => console.log(places.gsx$popular.$t))

         // return null;
      }
}
    

export default Norway