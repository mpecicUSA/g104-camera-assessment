import React from "react"
import Item from "./Item"
import {Form, Input } from "reactstrap"

class ItemList extends React.Component {
    updateSearchBar = (e) => {
        this.props.updateSearchBarText(e.target.value)
    }
    
    render () {
        let filteredCams = this.props.cameras.filter(cam => cam.name.includes(this.props.searchBarTextGlobal))
        let camera = [];
        camera = filteredCams.map(item => <Item key={item.id} cameraDetail={item} />)

        return (
            <>
                <Form> 
                    <Input type="text" onChange={this.updateSearchBar} value={this.props.cameras.searchBarTextGlobal} placeholder="Search our site"></Input>
                </Form>
                {camera}
            </>
            )
    }
}

export default ItemList