import React, { Component } from 'react';
import stylesModal from '../Modal/Modal.module.css';
import Aux from '../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log(this.props, this.state);
        if((nextProps.show===this.props.show) &&(nextProps.children===this.props.children)){
            return false;
        }else{
            return true;  

        }
      }
    render(){
    return(
        <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className={stylesModal.Modal}
        style={{
            transform:this.props.show?'translateY(0)':'translate(-100vh)',
            opacity:this.props.show?'1':'0'
        }}>
            {this.props.children}
        </div>
        </Aux>
    )
}
}
export default Modal;
