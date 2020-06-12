import React, { Component } from 'react';

class Activityfilter extends Component {

    displayHikingHandler = () => {
        //check the component above --> check fetched data --> if items.gsx$hiking.$t === yes --> display item
    }

render() {
    return(
        <div>
        <h2 className="centered">Choose an activity</h2>
        <p className="centered">Choose something you want to do or see, and we will suggest all the right places for it:</p>
        <div className="itemWrapper">
        <button className="activityBtn" onClick={this.displayHikingHandler}><i className="fas fa-hiking" aria-hidden="true"></i> Hiking</button>
        <button className="activityBtn"><i className="fas fa-city" aria-hidden="true"></i> City</button>
        <button className="activityBtn"><i className="fas fa-mountain" aria-hidden="true"></i> Landmark</button>
        <button className="activityBtn"><i className="fas fa-star" aria-hidden="true"></i> Northern lights</button>
        <button className="activityBtn"><i className="fas fa-umbrella-beach" aria-hidden="true"></i>Beaches</button>
        <button className="activityBtn"><i className="fas fa-fish" aria-hidden="true"></i> Other local specialties</button>
        <button className="activityBtn"><i className="fas fa-sun" aria-hidden="true"></i> Only summer trips</button>
        <button className="activityBtn"><i className="fas fa-snowflake" aria-hidden="true"></i> Only winter trips</button>
        </div>
        </div>
    )
}
}

export default Activityfilter