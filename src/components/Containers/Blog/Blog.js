import React, { Component } from 'react';
import blogStyle from '../Blog/Blog.module.css';
import FullPost from '../../FullPost/FullPost';
import NewPost from '../../NewPost/NewPost';
import Post from '../../Post/Post';
import PostsService from "../../Factory/PostsService/PostsService";
import { Container } from 'react-bootstrap';
import axios from "axios";
axios.interceptors.request.use(request => {
  console.log(request);
})

class Blog extends Component{
    state = {
        posts: [],
        varient:[
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
        ],
        authers: [
            'Shiva',
            'Satish',
            'Ravi',
            'Rajeshwari',
            'Mounika',
            'Kavya'
        ],
        error:false,
        selectedPostId:null
    }
    componentDidMount() {
        PostsService.getAllPosts().then(response => {
            
            const postsResponse = response.data;
            const updatedPostResponse = postsResponse.map(post => {
               var index = Math.floor(1 + Math.random() * (5 + 1 - 1));
            if (!index) {
                index = 0;
            }
               return {
                   ...post,
                   auther: this.state.authers[index]
                }
            })
            this.setState({
                posts: updatedPostResponse
            });
        }).catch(error => {
            console.log(error)
            this.setState({
                error:true
            })
        })
    }
    selectPostHangler=(id)=> {
        this.setState({
            selectedPostId:id
        })
}

    render() {
        let postCom = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if(!this.state.error){
        postCom = this.state.posts.map(post => {
            var index = Math.floor(0 + Math.random() * (7 + 0 - 1));
            if (!index) {
                index = 0;
            }
            return <Post
                bgprop={this.state.varient[index].toLowerCase()}
                key={post.id} post={post}
                selectPost={()=>this.selectPostHangler(post.id)}
            ></Post>
        })
        }
        
        return(
            <Container>
                <section className={blogStyle.Posts}>
                    { postCom}
                </section>
                <section>
                    <FullPost postId={ this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </Container>
        )
    }
};export default Blog;