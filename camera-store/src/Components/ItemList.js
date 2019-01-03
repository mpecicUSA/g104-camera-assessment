import React from "react"
import Item from "./Item"
import {Form, Input } from "reactstrap"

class ItemList extends React.Component {
    state = {
        searchBar: ""
    }
    updateSearchBar = (e) => {
        this.setState({
            searchBar: e.target.value
    })
    }
    render () {
        let filteredCams = this.props.cameras.filter(cam => cam.name.includes(this.state.searchBar))
        let camera = [];
        camera = filteredCams.map(item => <Item key={item.id} addToCart={this.props.addToCart} cameraDetail={item} />)

        return (
            <>
                <Form> 
                    <Input type="text" onChange={this.updateSearchBar} value={this.state.searchBar} placeholder="Search our site"></Input>
                </Form>
                {camera}
            </>
            )
    }
}

export default ItemList