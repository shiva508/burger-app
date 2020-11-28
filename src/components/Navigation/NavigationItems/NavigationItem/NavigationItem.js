import React from 'react';
import navigationItemStyle from '../NavigationItem/NavigationItem.module.css';

const NavigationItem=(props)=>(
    <li className={navigationItemStyle.NavigationItem}>
        <a 
        href={props.link}
        className={props.active ? navigationItemStyle.active:null}
        >{props.children}
        </a>
    </li>
)
export default NavigationItem