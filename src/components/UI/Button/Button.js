import React from 'react';
import stylesButtons from '../Button/Button.module.css';

const Button=(props)=>(
<button 
className={[stylesButtons.Button,stylesButtons[props.btnType]].join(' ')}
onClick={props.clicked}
>{props.children}</button>
);

export default Button;