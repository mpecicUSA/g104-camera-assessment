import React from "react"
import { Button } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardBody,CardSubtitle } from 'reactstrap';
import ReactStars from "react-stars"


class Item extends React.Component {
    addItemToCart = (e) => {
        this.props.addToCart(e.target.attributes.value.value)
    }
    render(){
        return (
            <div>
            <Card>
                <CardBody>
                    <CardImg top width="100%" src={this.props.cameraDetail.picture} alt={this.props.cameraDetail.name}/>
                    <CardTitle>Camera Name: {this.props.cameraDetail.name}</CardTitle>
                    <CardSubtitle>Price: ${this.props.cameraDetail.price} </CardSubtitle>
                    <CardText> Rating:
                    </CardText>
                    <ReactStars value={this.props.cameraDetail.rating} edit={false} count={5} size={30}/>
                    {this.props.cameraDetail.onSale ? <p>This item is on sale</p> : null}
                    <Button value={this.props.cameraDetail.id} onClick={this.addItemToCart} color="primary">Add to cart</Button>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default Item