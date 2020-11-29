import React, { Component } from 'react';
import fullPostStyle from '../FullPost/FullPost.module.css';

class FullPost extends Component{
   
    render(){
        let post=<p>Please select a Post!</p>;
        post=(
                <div className={fullPostStyle.FullPost}>
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className={fullPostStyle.Edit}>
                        <button className={fullPostStyle.Delete}>Delete</button>
                    </div>
                </div>
        )
        return post;
    }
};
export default FullPost;