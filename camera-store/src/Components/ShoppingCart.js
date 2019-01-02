import React from "react"

class ShoppingCart extends React.Component {
    render (){
        return (
            <div className="shopping-cart">
                <h1>Your cart</h1>
                <p>Subtotal: </p>
                {/* Tax will be 8.6% */}
                <p>Tax: </p> 
                <p>Total: </p>
                <button> Checkout</button>

            </div>
            )
        
    }
}

export default ShoppingCart