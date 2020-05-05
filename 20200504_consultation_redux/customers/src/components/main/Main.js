import React, { Component } from "react";
import { CustomersList } from "../customersList";
import { ReactReduxContext } from "react-redux";

export const Main = (props) => {
    return (<>
        <CustomersList 
            store={props.store}
        />
    </>);
}