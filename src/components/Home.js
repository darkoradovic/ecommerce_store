import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import Logo from '../assets/home-logo.png';

export default class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <div className="align">
                    <h1 className="text">Welcome to <img src={Logo} alt="..."/> store</h1>
                    <Link to="/products"><button type="button" class="btn btn-outline-primary">START SHOPPING</button></Link>
                </div>
            </HomeWrapper>
        )
    }
}

const HomeWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #abbaab;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #ffffff, #abbaab);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #ffffff, #abbaab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    

    .align{
        position: fixed;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        
    }

    @media (max-width: 600px) {
        position: relative;
        
        .align{
            padding-top: 60px;
        }
    }
`;