import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'
import Navbar from "./Navbar";
import { Box } from "@material-ui/core";



export default class ProductList extends Component {
  render() {
    return (
        <React.Fragment>
        <Navbar />

            <div className="py-5">
              <div className="container">
                <Box marginLeft="45%" style={{fontSize:"30PX",color:"brown", fontWeight:"bolder",letterSpacing:"2px"}}> Originals</Box>
                <div className="row">
                    <ProductConsumer>
                        {
                          value => {
                            return value.products.map (
                              product => {
                                return <Product key={product.id} product={product}/>
                              }
                            )
                          }
                        }
                    </ProductConsumer>
                </div>
              </div>
            </div>
        </React.Fragment>
    )
  }
}
