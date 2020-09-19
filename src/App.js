import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/";
import Home from "./components/Home";
import Publish from "./components/Publish";
import Default from "./components/Default";
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/list" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/publish" component={Publish} />
          <Route exact path="/" component={Home} /> 
          <Route component={Home} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
