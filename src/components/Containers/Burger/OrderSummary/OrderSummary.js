import React from 'react';
import Aux from '../../../hoc/Aux';

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
        </Aux>
    )
};
export default OrderSummary;

