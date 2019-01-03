import React from "react"
import Item from "./Item"
import { Input, FormGroup, Label } from "reactstrap"

class ItemList extends React.Component {
    state = {
        searchBar: "",
        searchParam: "1"
    }
    updateSearchBar = (e) => {
        this.setState({
            searchBar: (e.target.value)
    })
    }
    updateRadioSelection = (e) => {
        this.setState({
            searchParam: (e.target.id)

        })
    }
    render () {
        let filteredCams = this.state.searchParam === "1" ? this.props.cameras.filter(cam => cam.name.toUpperCase().includes((this.state.searchBar).toUpperCase())) : 
        this.props.cameras.filter(cam => cam.rating >= this.state.searchBar)
        let camera = [];
        camera = filteredCams.map(item => <Item key={item.id} addToCart={this.props.addToCart} cameraDetail={item} />)

        return (
            <>
                <FormGroup> 
                    <FormGroup tag="fieldset">
                    <legend>Search Options</legend>
                        <FormGroup check>   
                        <Label check>
                        <Input id="1" onClick={this.updateRadioSelection} type="radio" name="radio1" />{' Name'}
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                        <Input id="2" onClick={this.updateRadioSelection}type="radio" name="radio1" />{' Rating '}
                        </Label>
                        </FormGroup>
                </FormGroup>
                    <Input type="text" onChange={this.updateSearchBar} value={this.state.searchBar} placeholder="Search our site"></Input>
                </FormGroup>

                {camera}
            </>
            )
    }
}

export default ItemList