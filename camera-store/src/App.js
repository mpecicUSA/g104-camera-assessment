import React, { Component } from 'react';
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import ShoppingCart from "./Components/ShoppingCart";
import axios from "axios"


import './App.css';

class App extends Component {
  state = {
    cameras:[]
  }
  async componentDidMount(){
    const camList = await fetch('http://localhost:8082/api/cameras')
    const json = await camList.json()
    this.setState(prevState => {
      return {
        cameras:
          json,
          ...prevState.cameras
    }
    })
  }
  removeFromCart = (someParam) => {
    console.log("An item with an id of", someParam, "was removed from the cart")
    let filteredObj= this.state.cameras.filter(cam => cam.id == someParam)
    axios.patch(`http://localhost:8082/api/cameras/${someParam}/remove`).then(
      this.setState(prevState => ({
        cameras: prevState.cameras.reduce((acc, cv) => {
          if(cv.id == someParam ){
            return [
              ...acc, 
              {
                ...cv, 
                inCart: false
              }
            ]
          }
          return [...acc, cv]
        },[])
  }))
      )
  }
  addToCart = (someParam) => {
    console.log("An item with an id",someParam, " was added to the cart")
    axios.patch(`http://localhost:8082/api/cameras/${someParam}/add`)
    .then(
      this.setState(prevState => ({
        cameras: prevState.cameras.reduce((acc, cv) => {
          if(cv.id == someParam ){
            return [
              ...acc, 
              {
                ...cv, 
                inCart: true
              }
            ]
          }
          return [...acc, cv]
        },[])
  }))
      )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <ItemList updateSearchBarText={this.updateSearchBarText} addToCart={this.addToCart} cameras={this.state.cameras}/>
            </div>
            <div className="col-4">
              <ShoppingCart  removeFromCart={this.removeFromCart} cameras={this.state.cameras}/>
            </div>
          </div>
        </div>
      </div>
    );
}

}

export default App;


//Todos
// Style Item list and shopping cart to take up 80/20 --DONE
// style images so all pictures are same size --DONE
// Place each camera item inside of a card styling --DONE
// add styling to your cart --Done
// add filter form - Filter functions for Camera Name
// Call from Api instead of hardcoded state -- DONE
// On Click update api to add item to cart -- DONE ADD and REMOVE  
// Have Shopping cart float based on user scroll 
