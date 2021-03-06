import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../App.css';
import Logo from '../assets/store-logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (

            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={Logo} alt="..." className="navbar-brand" style={{ height: '50px' }} />
                </Link>
                <ul className="navbar-nav align-items-center ">
                    <li className="nav-item ml-5" style={{ float: 'left' }}>
                        <Link to="/" className="nav-link text-white">Home</Link>
                    </li>
                    <li className="nav-item ml-5" style={{ float: 'left' }}>
                        <Link to="/products" className="nav-link text-white">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer><span className="mr-2"><i className="fas fa-shopping-cart"></i></span>My cart</ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    z-index: 1000;
    background: var(--mainBlue);
    .nav-link{
        font-size: 1.3rem;
        text-transform: capitalize;
        list-style-type: none;
    }

    .nav-item{
        list-style-type: none;
        color: white;
    }
    
`;


