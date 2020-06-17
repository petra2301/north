import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Bucketlist extends Component {

    state = {
        listItemContainer : []
    }

    openBucketlistHandler = () => {
        const bucketlistWrapper = document.querySelector(".bucketlistWrapper");
        bucketlistWrapper.style.height = "100vh";
        document.querySelector("#arrowDown").classList.toggle("hidden");
        document.querySelector("#arrowDown").classList.toggle("onlyMobile");
        document.querySelector("#arrowUp").classList.toggle("hidden");
    }

    closeBucketlistHandler = () => {
        const bucketlistWrapper = document.querySelector(".bucketlistWrapper");
        bucketlistWrapper.style.height = "70px";
        document.querySelector("#arrowDown").classList.toggle("hidden");
        document.querySelector("#arrowDown").classList.toggle("onlyMobile");
        document.querySelector("#arrowUp").classList.toggle("hidden");
    }

    reuseJSONData = (fetchedData) => {
         console.log(fetchedData);
    }

    addDiv = (data) => {
        let listItem = 
        <div className="listItem">
            <img src={data.img} alt={data.imgalt}/>
            <div>
            <h4>{data.placeName}</h4>
            <a href={data.readMore}>Read more</a>
          </div>
          <i id={data.id} className="fas fa-trash-alt" aria-hidden="true"
          onClick={this.removeFromBucketlist}></i>
        </div>;
      this.state.listItemContainer.push(listItem);

      this.setState({
          ...this.state.listItemContainer,
          listItem
      })

      console.log(this.state.listItemContainer)
    }

    removeFromBucketlist = () => {
        //find the place of the item in the array
        //slice it from the array 
    }

render() {
    /* edge case message 
    TO-DO: make it disappear once #bucketlistItems is populated or listItemContainer.length > 0
    if (this.state.listItemContainer.length === 0) {
        this.state.listItemContainer.push(<p>It's empty - for now.<br/>Add places to your bucket list, and they will appear here.</p>);
    } */
    return(
        <div className="bucketlistWrapper">
        <h3 id="bucketlistTitle">Your bucketlist
        <i id="arrowDown" className="fas fa-angle-down onlyMobile" aria-hidden="true" onClick={this.openBucketlistHandler}></i>
        <i id="arrowUp" class="fas fa-angle-up hidden" onClick={this.closeBucketlistHandler}></i></h3>
        <div id="bucketlistItems">
            {this.state.listItemContainer}
        </div>
      </div>
    ) 
}
}

export default Bucketlist;