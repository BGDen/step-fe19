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
    handleInputCount =_=>{
        const {count} = this.store.getState();
        this.setState({count});
    }
    render = _ =>{
        return <div>
            <p>Users: <strong>{this.state.count}</strong></p>
        </div>;
    }
}