import React, { Component } from 'react';
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import ShoppingCart from "./Components/ShoppingCart";
import Checkout from "./Components/Checkout"
import Miss from "./Components/Miss"
import axios from "axios"
import './App.css';
import { BrowserRouter,
Route} from "react-router-dom"

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
    axios.patch(`http://localhost:8082/api/cameras/${someParam}/remove`).then(
      this.setState(prevState => ({
        cameras: prevState.cameras.reduce((acc, cv) => {
          if(cv.id === Number(someParam) ){
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
          if(cv.id === Number(someParam) ){
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
      <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
        <Route exact path="/checkout" render={ ()=> <Checkout/>}></Route>
        
          <div className="row">
            <div className="col">
              <Route exact path="/" render={ () =>  <ItemList updateSearchBarText={this.updateSearchBarText} addToCart={this.addToCart} cameras={this.state.cameras}/>} ></Route>
            </div>
            <div className="col-4">
              <Route exact path="/" render={() => <ShoppingCart  removeFromCart={this.removeFromCart} cameras={this.state.cameras}/>}></Route>
            </div>
          </div>
        </div>
      </div>
      {/* <Route render={ () => <Miss />}></Route> */}
      </BrowserRouter>
    );
}

}

export default App;

