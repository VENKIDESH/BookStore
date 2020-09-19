import React, { Component } from 'react'
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";


export default class Publish extends Component {

    constructor(props) {
        super(props);
    
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeauthor = this.onChangeauthor.bind(this);
        this.onChangeimgurl = this.onChangeimgurl.bind(this);
        this.onChangepreface = this.onChangepreface.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          title: "",
          author: "",
          imgurl: "",
          preface:"",
          price: "",
        };
      }
    
      onChangetitle(e) {
        this.setState({
          title: e.target.value,
        });
      }
    
      onChangeauthor(e) {
        this.setState({
          author: e.target.value,
        });
      }
    
      onChangeimgurl(e) {
        this.setState({
          imgurl: e.target.value,
        });
      }
         
      onChangepreface(e) {
        this.setState({
          preface: e.target.value,
        });
      }
    
    
      onChangeprice(e) {
        this.setState({
          price: e.target.value,
        });
      }
    
    
      onSubmit(e) {
        e.preventDefault();
    
        console.log(`Form submitted:`);
        console.log(`title: ${this.state.title}`);
        console.log(`author: ${this.state.author}`);
        console.log(`imgurl: ${this.state.imgurl}`);
        console.log(`preface: ${this.state.preface}`);
        console.log(`price: ${this.state.price}`);
    
        const newVolunteer = {
          title: this.state.title,
          author: this.state.author,
          imgurl: this.state.imgurl,
          preface: this.state.preface,
          price: this.state.price,
        };
    
    
        this.setState({
          title: "",
          author: "",
          imgurl: "",
          preface:"",
          price: "",
        });
      }
    render() {
        return (<Box>
      <Navbar />

            <Box marginTop="30px" marginLeft="300px" width="800px">
            <Box marginLeft="30px" style={{color:"#080808", fontSize:"25px", fontWeight:"bold" }}>Publishing New Book</Box>
            <form onSubmit={this.onSubmit}>
              <Box marginTop="10px" className="form-group">
                <label>Title: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangetitle}
                />
              </Box>
              <Box className="form-group">
                <label>Author: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.author}
                  onChange={this.onChangeauthor}
                /></Box>
              <Box className="form-group">
                <label>Cover Image url: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.imgurl}
                  onChange={this.onChangeimgurl}
                />
              </Box>
              <Box className="form-group">
                <label>Preface: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.preface}
                  onChange={this.onChangepreface}
                />
              </Box>
              <Box className="form-group">
                <label>Price: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.price}
                  onChange={this.onChangeprice}
                />
              </Box>
    
              <Box className="form-group">
                <input
                  type="submit"
                  value="Add Book"
                  className="btn btn-secondary"
                />
              </Box>
            </form>
          </Box></Box>
        )
    }
}
