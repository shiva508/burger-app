import React, { Component } from 'react';
import styleClasses from '../BurgerIngredients/BurgerIngredients.module.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component{

    render(){
        let ingredient=null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient=<div className={styleClasses.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient=(
                <div className={styleClasses.BreadTop}>
                    <div className={styleClasses.Seeds1}></div>
                    <div className={styleClasses.Seeds2}></div>
                </div>
                );
                break;
            case ('meat'):
                ingredient=<div className={styleClasses.Meat}></div>;
                break;
            case ('cheese'):
                ingredient=<div className={styleClasses.Cheese}></div>;
                break;
            case ('salad'):
                ingredient=<div className={styleClasses.Salad}></div>;
                break;
            case ('bacon'):
                ingredient=<div className={styleClasses.Bacon}></div>;
                break;
            default:
                ingredient=null;
                break;
        }
        return ingredient;
    }
};

BurgerIngredients.propTypes={
    type:PropTypes.string.isRequired
};

export default BurgerIngredients;