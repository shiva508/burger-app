import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import styleClasses from '../Burger/Burger.module.css';

const Burger =(props)=>{
    let transformedIngredients=Object.keys(props.ingredients)
            .map(ingratientKey=>{
                return [...Array(props.ingredients[ingratientKey])].map((_,i)=>{
                    return <BurgerIngredients key={ingratientKey+i} type={ingratientKey}/>
                })
            }).reduce((arr,el)=>{
                return arr.concat(el);
            },[]);
            
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please start adding ingredients</p>
    }
return(
    <div className={styleClasses.Burger}>
    <BurgerIngredients type={'bread-top'} />
            {transformedIngredients}
    <BurgerIngredients type={'bread-bottom'} />
    </div>
    
);
};export default Burger;