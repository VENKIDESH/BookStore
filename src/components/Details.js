import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import Product from './Product';
import Navbar from "./Navbar";
import { Box } from "@material-ui/core";


export default class Details extends Component {
  render() {
    return (
<div>
      <Navbar />
      <Box marginLeft="8%" marginRight="8%">

      <ProductConsumer>

        {
          (value)=>{
            const {id, company, img, info, price, title, inCart} = 
            value.detailProduct;

            return (
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                    <h1>
                      {title}
                    </h1>
                  </div>
                  <div className="row">
                    <Box width="260px" marginLeft="10%" overflow="hide">
                        <img src={img} className="img-fluid" alt="product"/>
                        </Box>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <h2>Title: {title}</h2>
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        Author : <span className="text-uppercase">{company}</span>
                      </h4>
                      <h4 className="text-blue">
                        <strong>
                          price: {price} <span>wei</span> 
                        </strong>
                      </h4>
                      <p className="text-capitalize font-weight-bold mt-3 mb-0">
                          Preface:
                      </p>
                      <p className="text-muted lead">
                        {info}
                      </p>
                      <div>
                        <Link to="/list">
                          <ButtonContainer>
                            Back to Book List
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer 
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "InCart":"Add to Cart"}
                          </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </div>
            );

          }
        }
      </ProductConsumer></Box>
      </div>
    )
  }
}
