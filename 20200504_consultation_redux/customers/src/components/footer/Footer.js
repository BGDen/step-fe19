import React, { Component } from "react";

export class Footer extends Component{
    constructor(props){
        super(props);
        this.store = props.store;
        this.state = {
            count : 0
        };

        this.store.subscribe(this.handleInputCount);
    }
    handleInputCount = (...data) =>{
        console.log(data);
        // this.setState({count : data.count});
    }
    render = _ =>{
        return <div>
            <p>Users: <strong>{this.state.count}</strong></p>
        </div>;
    }
}