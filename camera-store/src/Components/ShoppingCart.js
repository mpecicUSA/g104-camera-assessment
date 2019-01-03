import React from "react"
import {Button, Badge} from "reactstrap"

class ShoppingCart extends React.Component {
    removeFromCart = (e) => {
        console.log(e.target.attributes.value.value, "id was removed from cart");
        this.props.removeFromCart(e.target.attributes.value.value)
    }
    render (){
        let itemsInCart = this.props.cameras.filter(cam => cam.inCart)
        return (
            <div className="shopping-cart">
                <h1>Your cart</h1>
                <div>
                    {/* map over items in cart to show those items in cart */}
                { itemsInCart.map(item => <div> 
                        <Button color="light" value={item.id}onClick={this.removeFromCart} outline>{item.name} <Badge>Remove From Cart</Badge></Button>
                    </div>)}
                </div>
                <p>Subtotal: {(itemsInCart.reduce((acc, cv) => acc + cv.price ,0)).toFixed(2)}</p>
                {/* Tax will be 8.6% */}
                <p>Tax: {(itemsInCart.reduce((acc, cv) => acc + cv.price ,0)*.086).toFixed(2)} </p> 
                <p>Total: {(itemsInCart.reduce((acc, cv) => acc + cv.price ,0)*1.086).toFixed(2)}</p>
                <button> Checkout</button>

            </div>
            )
        
    }
}

export default ShoppingCart