import React from 'react';
import stylesModal from '../Modal/Modal.css'
const Modal=(props)=>{
    <div className={stylesModal.Modal}>
        {props.children}
    </div>
}

