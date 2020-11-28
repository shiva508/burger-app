import React from 'react';
import stylesModal from '../Modal/Modal.module.css';
import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal=(props)=>(
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className={stylesModal.Modal}
    style={{
        transform:props.show?'translateY(0)':'translate(-100vh)',
        opacity:props.show?'1':'0'
    }}>
        {props.children}
    </div>
    </Aux>
)
export default Modal;
