import React from 'react';
import backDropStyles from '../Backdrop/Backdrop.module.css';

const Backdrop=(props)=>(
    props.show?<div className={backDropStyles.Backdrop} onClick={props.clicked}></div>:null
)
export default Backdrop;