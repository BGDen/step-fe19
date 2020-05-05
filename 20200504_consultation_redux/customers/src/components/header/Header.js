import React, { Component, useContext } from "react";
import {customersCount} from '../../helpers/redux/actions';
import { ReactReduxContext } from 'react-redux';

export class Header extends Component{
    constructor(props){
        super(props);
        this.store = props.store;
        this.inpValue = React.createRef();
    }
    handlerClick =_=>{
        this.store.dispatch(customersCount(this.inpValue.current.value));
    }

    render = _ =>{
        return <div>
            <input 
                type="number" 
                ref={this.inpValue}
                />
            <button
            onClick={this.handlerClick}>Load</button>
        </div>;
    }
}