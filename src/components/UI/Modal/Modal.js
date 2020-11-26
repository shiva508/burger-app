import React from 'react';
import stylesModal from '../Modal/Modal.module.css';

const Modal=(props)=>(
    <div className={stylesModal.Modal}
    style={{
        transform:props.show?'translateY(0)':'translate(-100vh)',
        opacity:props.show?'1':'0'
    }}>
        {props.children}
    </div>
)
export default Modal;
