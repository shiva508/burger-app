import React, { Component } from 'react';
import newPostStyle from '../NewPost/NewPost.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PostsService from '../Factory/PostsService/PostsService';

class NewPost extends Component{

    state={
        title:'',
        content:'',
        auther:'Shiva'
    }
    postDataSubmitHandler = (e) => {
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.content
        }
        console.log(post)
        PostsService.savePost(PostsService).then(Response => {
            console.log(Response)
        })

    }
    render(){
        return(
            <div className={newPostStyle.NewPost}>
                <h1>Add new post</h1>
                <Form onSubmit={this.postDataSubmitHandler}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Please Enter Title"  value={this.state.title} onChange={(event)=>{this.setState({title:event.target.value})}}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" placeholder="Please Enter Content" value={this.state.content} onChange={(event)=>{this.setState({content:event.target.value})}}/>
                    </Form.Group>

                    <Form.Group  controlId="formGridAuther">
                        <Form.Label>Auther</Form.Label>
                        <Form.Control as="select" value={this.state.auther} onChange={(event)=>{this.setState({auther:event.target.value})}}>
                            <option>Choose...</option>
                            <option value='1'>Shiva</option>
                            <option value='2'>Dasari</option>
                        </Form.Control>
                        </Form.Group>
                    <Button variant="primary" type='submit' >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
};
export default NewPost;