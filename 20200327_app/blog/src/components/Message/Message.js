import React from 'react';
import "./Message.css";

export function Message(props) {
    return (<div className="card mb-3 w-2">
       <div className="row no-gutters">
          <div className="col-md-4">
             <img src={props.data.authorimg} className="card-img" alt="author icon" />
           </div>
          <div className="col-md-8">
             <div className="card-body">
                <h5 className="card-title">{props.data.author}</h5>
                <p className="card-text">{props.data.text}</p>
                
                <p className="card-text font-italic"><small className="text-muted">{props.data.categories.map(c => `#${c} `).join('')}</small></p>
                <p className="card-text text-right"><small className="text-muted">{props.data.date}</small></p>
             </div>
          </div>
       </div>
    </div>);
 
 }