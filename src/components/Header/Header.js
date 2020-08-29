import React from 'react';
import {Card, Button} from 'react-bootstrap'
const Header = (props) => {
    console.log(props)
    const {title, description,urlToImage} = props.article;
    return (
        
        <Card>
        <Card.Header>Featured</Card.Header>
        <img style={{width:"200px"}} src={urlToImage} alt=""/>
        <Card.Body>
    <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        
    );
};

export default Header;