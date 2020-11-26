import React from 'react';
import Aux from '../hoc/Aux';
import styleClasses from  '../Layout/Layout.module.css';

const Layout=(props)=>{
   
    return ( 
    <Aux>
        <div className={styleClasses.ToolBar}>Toolbar,Sidedrawe,Backdrap</div>
        <main className={styleClasses.Content}>
            {props.children}
        </main>
    </Aux>
    )
   
};export default Layout;