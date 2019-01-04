import React from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
class Checkout extends React.Component{
    render(){
        return(

            <>
                <Form> 
                    <FormGroup>
                        <Label for="name"> Name </Label>
                        <Input type="text" name="userFirstName" id="userFirstName" placeholder="First Name"></Input>
                        <Input type="text" name="userLastName" id="userLastName" placeholder="Last Name"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userEmail"> Email </Label>
                        <Input type="email" name="userEmail" id="userFirstName" placeholder="Email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="shippingAddress"> Address </Label>
                        <Input type="string" name="address" id="address" placeholder="Address"></Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </>
            )
        
    }
}

export default Checkout 

// Unclear of what this means 
// You now have a new checkout page, and that very first component looks quite similar to our live cart preview component on the home page. The only difference is that it doesn't display the list of items and there is no button.

// Find a way to reuse your live cart preview component on the checkout page but so that the list and button don't get rendered.