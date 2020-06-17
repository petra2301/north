import React, { Component } from 'react';

class Bucketlist extends Component {
render() {
    return(
        <div className="bucketlistWrapper closeBucketlist">
        <h3 id="bucketlistTitle">Your bucketlist <i id="arrow" className="fas fa-angle-down onlyMobile" aria-hidden="true"></i></h3>
        <div id="bucketlistItems">
        <p>It's empty - for now.</p>
        <p>Add places to your bucket list, and they will appear here.</p>
        </div>
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

      </div>
    )
}
}

export default Bucketlist;