import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
import { Box } from "@material-ui/core";

export default class Navbar extends Component {
    render() {
        return (
            <Box
                marginLeft="7%"
                marginRight="7%"
                boxShadow="2px 10px 20px #0405051A"
                style={{ backgroundColor: "white" }}
            >
                <nav className="navbar navbar-expand-sm navbar px-sm-5">
                    <Link to="/">
                        <img
                            src={logo}
                            style={{ width: "200px", height: "68px" }}
                            alt="store"
                            className="navbar-brand"
                        />
                    </Link>

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/list" className="nav-link">
                                Original Copy
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/list" className="nav-link">
                                Second Copy
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/publish" className="nav-link">
                                Publisher
                            </Link>
                        </li>
                    </ul>

                    <Link className="ml-auto" to="/cart">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </nav>
            </Box>
        );
    }
}

const NavbarWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;
