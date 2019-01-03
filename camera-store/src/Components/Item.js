import React from "react"
import { Button } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardBody,CardSubtitle } from 'reactstrap';
import axios from "axios"

class Item extends React.Component {
    addItemToCart = (e) => {
        axios.patch(`http://localhost:8082/api/cameras/${e.target.value}/add`)
        .then(console.log("an item was added to the cart"))
    }
    render(){
        return (
            <div>
            <Card>
                <CardBody>
                    <CardImg top width="100%" src={this.props.cameraDetail.picture} alt={this.props.cameraDetail.name}/>
                    <CardTitle>Camera Name: {this.props.cameraDetail.name}</CardTitle>
                    <CardSubtitle>Price: ${this.props.cameraDetail.price} </CardSubtitle>
                    <CardText>Rating: {this.props.cameraDetail.rating} </CardText>
                    {this.props.cameraDetail.onSale ? <p>This item is on sale</p> : null}
                    <Button value={this.props.cameraDetail.id} onClick={this.addItemToCart} color="primary">Add to cart</Button>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default Item