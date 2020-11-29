import React from 'react';
import Card from 'react-bootstrap/Card';
const CardComponent=(props)=>(
<Card bg={props.bgprop}
  text={props.bgprop === 'light' ? 'dark' : 'white'} 
  style={{ width: '18rem','marginBottom': '15px','marginRight': '10px'}}>
  <Card.Body>
    <Card.Title>Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Auther:Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Update</Card.Link>
    <Card.Link href="#">Delete</Card.Link>
  </Card.Body>
</Card>
);
export default CardComponent;