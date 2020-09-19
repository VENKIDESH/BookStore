import React, { Component } from "react";
import img from "../home.jpg";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import logo from "../logo.png";

export default class Home extends Component {
    render() {
        return (
            <Box width="100%">
                <Box marginLeft="7%" marginRight="7%">
                    <img
                        src={logo}
                        style={{ width: "200px", height: "68px" }}
                    />
                    <Box boxShadow="2px 10px 20px #0405051A">
                        <img
                            src={img}
                            style={{
                                width: "100%",
                                height: "500px",
                                position: "relative",
                            }}
                        />
                        <Box
                            style={{
                                position: "absolute",
                                top: "150px",
                                left: "10%",
                                fontSize: "3rem",
                                fontWeight: "bolder",
                                fontFamily: "Oswald",
                                letterSpacing: "3px",
                            }}
                        >
                            WELCOME
                        </Box>
                        <Box
                            style={{
                                position: "absolute",
                                top: "235px",
                                left: "10%",
                                fontSize: "2rem",
                                fontWeight: "bolder",
                                fontFamily: "Oswald",
                                letterSpacing: "3px",
                            }}
                        >
                            TO THE NEW ERA OF
                        </Box>
                        <Box
                            style={{
                                position: "absolute",
                                top: "300px",
                                left: "10%",
                                fontSize: "4rem",
                                fontWeight: "bolder",
                                fontFamily: "Oswald",
                                letterSpacing: "3px",
                                textShadow: "2px 2px #ff0000",
                            }}
                        >
                            DECENTRALIZED
                        </Box>
                        <Box
                            style={{
                                position: "absolute",
                                top: "400px",
                                left: "10%",
                                fontSize: "2.5rem",
                                fontWeight: "bolder",
                                fontFamily: "Oswald",
                                letterSpacing: "3px",
                            }}
                        >
                            LIBRARY
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        marginTop="30px"
                        marginBottom="30px"
                        height="280px"
                    >
                        <Box
                            width="22%"
                            padding="20px"
                            boxShadow="2px 10px 20px #0405051A"
                            style={{
                                backgroundColor: "#f8efde",
                                fontSize: "20px",
                            }}
                        >
                            <img
                        src="https://assets.readitforward.com/wp-content/uploads/2018/10/RIF-Holiday-Books-HistoricalFiction-830x625.jpg"
                        style={{ width: "100%" }}
                    />
                            <Link className="ml-auto" to="/list" style={{textDecoration:"none"}}>

                            Get Your Original Copies from here
                                <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </Box>
                        <Box
                            width="22%"
                            padding="20px"
                            boxShadow="2px 10px 20px #0405051A"
                            marginLeft="4%"
                            style={{ backgroundColor: "#f8efde",fontSize: "20px" }}
                        >
                           <img
                        src="https://assets.readitforward.com/wp-content/uploads/2019/11/Nov19-1600x1200-830x625.jpg"
                        style={{ width: "100%" }}
                    />
                            <Link className="ml-auto" to="/list" style={{textDecoration:"none"}}>

                            Find Some Cheap Second Hand Books from here
                                <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </Box>
                        <Box
                            width="22%"
                            padding="20px"
                            boxShadow="2px 10px 20px #0405051A"
                            marginLeft="4%"
                            style={{ backgroundColor: "#f8efde",fontSize: "20px" }}
                        >
                           <img
                        src="https://assets.readitforward.com/wp-content/uploads/2013/03/TheWatchAuthor-830x625.jpg"
                        style={{ width: "100%" }}
                    />
                            <Link className="ml-auto" to="/publish" style={{textDecoration:"none"}}>

                            Publish Your Original Book Content here
                                <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </Box>
                        <Box
                            width="22%"
                            padding="20px"
                            boxShadow="2px 10px 20px #0405051A"
                            marginLeft="4%"
                            style={{ backgroundColor: "#f8efde",fontSize: "20px" }}
                        >
                           <img
                        src="https://assets.readitforward.com/wp-content/uploads/2020/05/taylor-D9_QOTmbFAg-unsplash-830x625.jpg"
                        style={{ width: "100%" }}
                    />
                            <Link className="ml-auto" to="/list" style={{textDecoration:"none"}}>

                            Your Library: Have Time? Read Your Books From here
                                <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}
