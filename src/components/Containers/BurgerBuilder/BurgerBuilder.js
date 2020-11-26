import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE={
    salad:0.5,
    bacon:0.4,
    cheese:1.3,
    meat:0.7
};

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchaseble:false
    };

    updatePurchaseState(ingredieints){
        const sum=Object.keys(ingredieints).map((ingredientKey)=>{
            return ingredieints[ingredientKey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        console.log(sum);
        this.setState({purchaseble:sum>0})
    }
    addIngedientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const newCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients,
            ...this.state.totalPrice
        }
        updatedIngredients[type]=newCount;
        const priceAddition=INGREDIENT_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const newCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients,
            ...this.state.totalPrice
        }
        updatedIngredients[type]=newCount;
        const oldPrice=this.state.totalPrice;
        const priceDedection=INGREDIENT_PRICE[type];
        const newPrice=oldPrice-priceDedection;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    render(){
        const disAbledInfo={
            ...this.state.ingredients
        }
        for(let key in disAbledInfo){
            disAbledInfo[key]=disAbledInfo[key]<=0;
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngedientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disAbledInfo}
                    purchaseble={this.state.purchaseble}
                    totalPrice={this.state.totalPrice}/>
            </Aux>
        )   
    }
}export default BurgerBuilder;