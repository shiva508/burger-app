import React, { Component } from 'react';
import blogStyle from '../Blog/Blog.module.css';
import FullPost from '../../FullPost/FullPost';
import NewPost from '../../NewPost/NewPost';
import Post from '../../Post/Post';

class Blog extends Component{
    render(){
        let  varient=[
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
          ];
        return(
            <div>
                <section className={blogStyle.Posts}>
                    <Post bgprop={varient[2].toLowerCase()}/>
                    <Post bgprop={varient[3].toLowerCase()}/>
                    <Post bgprop={varient[7].toLowerCase()}/>
                    <Post bgprop={varient[2].toLowerCase()}/>
                    <Post bgprop={varient[3].toLowerCase()}/>
                    <Post bgprop={varient[7].toLowerCase()}/>
                    <Post bgprop={varient[2].toLowerCase()}/>
                    <Post bgprop={varient[3].toLowerCase()}/>
                    <Post bgprop={varient[7].toLowerCase()}/>
                </section>
                <section>
                    <FullPost/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        )
    }
};export default Blog;