import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
                <ul className="nabar-nav align-items-center mt-3">
                    <li className="nav-item ml-5" style={{ float: 'left' }}>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item ml-5" style={{ float: 'left' }}>
                        <Link to="/products" className="nav-link">Products</Link>
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
        color: var(--mainWhite);
        font-size: 1.3rem;
        text-transform: capitalize;
        list-style-type: none;
    }
    .nav-item{
        list-style-type: none;
    }

    
    
`;


