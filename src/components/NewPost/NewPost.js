import React, { Component } from 'react';
import newPostStyle from '../NewPost/NewPost.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewPost extends Component{

    state={
        title:'',
        content:'',
        auther:'Shiva'
    }

    render(){
        return(
            <div className={newPostStyle.NewPost}>
                <h1>Add new post</h1>
                <Form>
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
                            <option value='Shiva'>Shiva</option>
                            <option value='Dasari'>Dasari</option>
                        </Form.Control>
                        </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
};
export default NewPost;