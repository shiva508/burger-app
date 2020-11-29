import React, { Component } from 'react';
import { render } from 'react-dom';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../UI/Button/Button';

class OrderSummary extends Component{

    componentDidUpdate(){
        console.log("OrderSummary")
    }
    
render(){
    const ingradentsSummary=Object.keys(this.props.ingredients).map((ingradentsKey)=>{
        return (
        <li key={ingradentsKey}>
            <span style={{textTransform:'capitalize'}}>{ingradentsKey}</span> :{this.props.ingredients[ingradentsKey]}
            </li>)
        })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Your order contains fallowing in gredients</p>
            <ul>
                {ingradentsSummary}
            </ul>
            <p>Continue to checkout</p>
            <p>Amout to be paid: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={this.props.modalClosed}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.continuePurchse}>CONTINUE</Button>
        </Aux>
    )
}
    

    
};
export default OrderSummary;

