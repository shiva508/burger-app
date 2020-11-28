import React from 'react';
import toolbarStyles from '../Toolbar/Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar=(props)=>(
    <header className={toolbarStyles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={toolbarStyles.Logo}>
         <Logo />
        </div>
        <nav className={toolbarStyles.DesktopOnly}>
           <NavigationItems/>
        </nav>
    </header>
);
export default Toolbar;