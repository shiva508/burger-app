import React from'react';
import navigationItemsStyles from '../NavigationItems/NavigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const NavigationItems=(props)=>(
    <ul className={navigationItemsStyles.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/posts" >Checkout</NavigationItem>
    </ul>
);
export default NavigationItems;