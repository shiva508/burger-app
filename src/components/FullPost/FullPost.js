import React, { Component } from 'react';
import fullPostStyle from '../FullPost/FullPost.module.css';
import PostsService from '../Factory/PostsService/PostsService';

class FullPost extends Component{
    state={
        selectedPost:null
    }
    componentDidUpdate() {
        if (this.props.postId) {
            if (!this.state.selectedPost |(this.state.selectedPost && this.props.postId !== this.state.selectedPost.id)) {
               PostsService.getPostByPostId(this.props.postId).then(response => {
                this.setState({
                    selectedPost:response.data
                })
             }) 
            }
        }
        
    }
    deletePost=(id)=> {
        PostsService.deletePost(id).then(response => {
            console.log(response)
        })
    }

    render(){
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.postId) {
           post = <p style={{ textAlign: 'center' }}>LOADING.......!</p>; 
        }
        if (this.state.selectedPost) {
           post=(
                <div className={fullPostStyle.FullPost}>
                   <h1>{ this.state.selectedPost.title}</h1>
                   <p>{ this.state.selectedPost.body}</p>
                    <div className={fullPostStyle.Edit}>
                       <button onClick={()=> this.deletePost(this.state.selectedPost.id)} className={fullPostStyle.Delete}>Delete</button>
                    </div>
                </div>
        ) 
        }
        return post;
    }
};
export default FullPost;