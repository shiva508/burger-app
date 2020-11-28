import React from 'react';
import burgurLogo from '../assets/images/burger-logo.png';
import logoStyles from '../Logo/Logo.module.css';

const Logo=(props)=>(

<div className={logoStyles.Logo} style={{height:props.height}}>
        <img src={burgurLogo} alt="Bur"></img>
    </div>
);
export default Logo;
