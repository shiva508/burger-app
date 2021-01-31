import React from 'react';
import Card from 'react-bootstrap/Card';
const CardComponent = (props) => (
  
  <Card bg={props.bgprop}
    text={props.bgprop === 'light' ? 'dark' : 'white'}
    className="mb-2"
    style={{ width: '18rem', 'marginBottom': '15px', 'marginRight': '10px' }}
    onClick={props.selectPost}>
  <Card.Body>
      <Card.Title>Auther:{ props.post.auther}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Title:{props.post.title}</Card.Subtitle>
      <Card.Text >
        {props.post.body}
    </Card.Text>
    <Card.Link href="#">Update</Card.Link>
    <Card.Link href="#">Delete</Card.Link>
  </Card.Body>
</Card>
);
export default CardComponent;