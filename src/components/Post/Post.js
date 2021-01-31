import React from 'react';
import postStyles from '../Post/Post.module.css';
import CardComponent from '../UI/Card/CardComponent';
const Post=(props)=>(
    <CardComponent bgprop={props.bgprop} post={props.post} selectPost={props.selectPost }/>
);
export default Post;