import React from 'react';
import drawerToggleStyle from '../DrawerToggle/DrawerToggle.module.css'
const DrawerToggle=(props)=>(
        <div 
            className={drawerToggleStyle.DrawerToggle} 
            onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
        </div>
);

export default DrawerToggle;
