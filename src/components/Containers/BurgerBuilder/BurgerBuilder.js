import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../Burger/OrderSummary/OrderSummary';
import Swal from 'sweetalert2';
import AxiosFirebaseFactory from '../../Factory/AxiosFirebaseFactory/AxiosFirebaseFactory';
import Spinner from '../../UI/Spinner/Spinner';
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

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
        purchaseble:false,
        purchasing: false,
        isLoading:false
    };

    updatePurchaseState(ingredieints){
        const sum=Object.keys(ingredieints).map((ingredientKey)=>{
            return ingredieints[ingredientKey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
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

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler = () => {


        const orders = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Shiva',
                address:'TMP'
            }
        }
        console.log(orders)
        Swal.fire({
            title: 'Are you sure Continue purchasing',
            text: 'Please pay amount :'+this.state.totalPrice.toFixed(2),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33', 
            confirmButtonText: 'Yes!'
         }).then((result) => {
             this.setState({
                isLoading:true
            })
            if(result.value){
                this.setState({ purchasing: false })
                AxiosFirebaseFactory.post('/orders.json', orders)
                    .then(response => {
                        console.log(response)
                         this.setState({
                isLoading:false
            })
                    })
                    .catch(error => {
                        console.log(error)
                     this.setState({
                isLoading:false
            })
                    });
               
            }else{
                this.setState({purchasing:false}) 
            }
         })
    }
    render(){
        const disAbledInfo={
            ...this.state.ingredients
        }
        for(let key in disAbledInfo){
            disAbledInfo[key]=disAbledInfo[key]<=0;
        }
        let orderSummary= <OrderSummary 
                        ingredients={this.state.ingredients} 
                        continuePurchse={this.purchaseContinueHandler} 
                        modalClosed={this.purchaseCancelHandler}
                        totalPrice={this.state.totalPrice}/>
         
        if (this.state.isLoading) {
            orderSummary=<Spinner/>
        }

        return(
            <Aux>
                    <Modal show={this.state.purchasing} >
                     {orderSummary}
                    </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngedientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disAbledInfo}
                    purchaseble={this.state.purchaseble}
                    totalPrice={this.state.totalPrice}
                    orderItems={this.purchaseHandler}/>
            </Aux>
        )   
    }
}export default WithErrorHandler(BurgerBuilder,AxiosFirebaseFactory);