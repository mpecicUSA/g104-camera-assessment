import React from "react"
import { Button } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardBody,CardSubtitle } from 'reactstrap';

class Item extends React.Component {
    render(){
        return (
            <div>
            <Card>
            <CardImg top width="100%" src={this.props.cameraDetail.picture} alt={this.props.cameraDetail.name}/>
            <CardBody>
            <CardTitle>Camera Name: {this.props.cameraDetail.name}</CardTitle>
            <CardSubtitle>Price: ${this.props.cameraDetail.price} </CardSubtitle>
            <CardText>Rating: {this.props.cameraDetail.rating} </CardText>
            {this.props.cameraDetail.onSale ? <p>This item is on sale</p> : null}
            <Button color="primary">Add to cart</Button>
            </CardBody>
            </Card>
            </div>
        )
    }
}

export default Item