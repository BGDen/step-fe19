import React, { Component } from "react";
import {} from './style.css';

export const CustomerCard = ({user}) => {
    return (
        <div className="customer-card">
            <div className="img">
                <img src={user.picture} />
            </div>
            <h4>
                {user.name.first} {user.name.last}
            </h4>
            <p>gender : {user.gender} </p>
        </div>
    );
}