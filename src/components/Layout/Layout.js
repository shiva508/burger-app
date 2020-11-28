import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import styleClasses from  '../Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state={
        showSidedrawer:false
    }

    SideDrawerClosedhandler=()=>{
        this.setState({
            showSidedrawer:false
        })
    }

    SideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
         return {showSidedrawer:!prevState.showSidedrawer}
        })
    }

   render(){
    return ( 
    <Aux>
       <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
       <SideDrawer 
            open={this.state.showSidedrawer}
            closed={this.SideDrawerClosedhandler}/>
        <main className={styleClasses.Content}>
            {this.props.children}
        </main>
    </Aux>
    )
}
};export default Layout;