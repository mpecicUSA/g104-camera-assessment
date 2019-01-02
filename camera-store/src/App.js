import React, { Component } from 'react';
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import ShoppingCart from "./Components/ShoppingCart";


import './App.css';

class App extends Component {
  state = {
    cameras:[],
    searchBarTextGlobal: ""
  }
  async componentDidMount(){
    const camList = await fetch('http://localhost:8082/api/cameras')
    const json = await camList.json()
    this.setState(prevState => {
      return{
        cameras:
          json,
          ...prevState.cameras
      }
    })
}
  updateSearchBarText = (valueOfStateInItemList) => {
    this.setState({
      searchBarTextGlobal: valueOfStateInItemList
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <ItemList searchBarTextGlobal={this.state.searchBarTextGlobal} updateSearchBarText={this.updateSearchBarText} cameras={this.state.cameras}/>
            </div>
            <div className="col-4">
              <ShoppingCart  cameras={this.state.cameras}/>
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
// On Click update api to add item to cart
// Have Shopping cart float based on user scroll 
