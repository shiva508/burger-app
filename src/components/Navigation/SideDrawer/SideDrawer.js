import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import sideDrawerStyles from '../SideDrawer/SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';

const SideDrawer=(props)=>{
    let attachedClasses=[sideDrawerStyles.SideDrawer,sideDrawerStyles.Close];
    console.log(attachedClasses)
    if(props.open){
        attachedClasses=[sideDrawerStyles.SideDrawer,sideDrawerStyles.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={sideDrawerStyles.Logo}>
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    )
}
export default SideDrawer;