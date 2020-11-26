import React from 'react';
import styleClasses from '../BuildControls/BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls=[
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
]

const BuildControls=(props)=>{
    return (
        <div className={styleClasses.BuildControls}> 
        <p>Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
                removed={()=>props.ingredientRemoved(ctrl.type)} 
                added={()=>props.ingredientAdded(ctrl.type)} 
                key={ctrl.label} 
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        
            <button 
            disabled={!props. purchaseble} 
            className={styleClasses.OrderButton}>ORDER NOW</button>
            
    </div>
    )
}
export default BuildControls;