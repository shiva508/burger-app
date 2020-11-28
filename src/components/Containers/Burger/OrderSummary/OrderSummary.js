import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../../UI/Button/Button';

const OrderSummary=(props)=>{

    const ingradentsSummary=Object.keys(props.ingredients).map((ingradentsKey)=>{
    return (
    <li key={ingradentsKey}>
        <span style={{textTransform:'capitalize'}}>{ingradentsKey}</span> :{props.ingredients[ingradentsKey]}
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
            <p>Amout to be paid: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.modalClosed}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continuePurchse}>CONTINUE</Button>
        </Aux>
    )
};
export default OrderSummary;

