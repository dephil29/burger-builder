import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, // for test purposes only, configure price on the server end irl for security
      customer: {
        name: 'eric',
        address: {
          street: 'test street 1',
          zipCode: '41351',
          country: 'USA'
        },
        email: 'test@test.com',
        deliveryMethod: 'fastest'
      }
    };

    axios.post('/order.json', order)
    .then(res => {
      this.setState({ 
        loading: false
      });
      this.props.history.push("/");
    })
    .catch(err => {
      this.setState({ 
        loading: false
      })
    });
  }

  render(){
    let form = (        
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
        <input className={classes.Input} type="text" name="street" placeholder="Street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if(this.state.loading){
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contect Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;