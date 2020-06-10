import React from 'react';

const Bucketlistitem = () => {
    return(
        <div className="listItem">
          <img src={props.img} alt={props.name}/>
          <div>
            <h4>{props.name}}</h4>
            <a href="#">Read more</a>
          </div>
          <i className="fas fa-trash-alt" aria-hidden="true"></i>
          {//this needs an onClick method to remove it from the bucketlist
          }
        </div>
    ) 
};

export default Bucketlistitem;