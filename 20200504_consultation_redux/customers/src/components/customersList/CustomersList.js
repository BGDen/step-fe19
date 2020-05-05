import React, { Component } from "react";
import { CustomersService } from "../../services/customers/";
import { CustomerCard } from "../customerCard";

export class CustomersList extends Component{
    constructor(props){
        super(props);
        this.state = {
            customers : []
        };
        this.store = props.store;
        this.store.subscribe(this.handleLoad);
        this.load();
        
    }

    handleLoad =_=>{
        const { count } = this.store.getState();
        CustomersService.GET(count).then(data => {
            const { customers } = this.state;
            this.setState({
                customers : customers.concat(data)
            });
        });
    }

    load(){
        CustomersService.GET().then(data => {
            const st = Object.assign({}, this.state, { customers : data});
            console.log('received data: ', data);
            this.setState(st);
        });
    }
    render =_=>{
        return <div>
            <h2>Customers List:</h2>
            {this.state.customers.map(customer => {
                return (<CustomerCard 
                    user={customer}
                    key={customer.uuid}
                />);
            })}
        </div>
    }
}