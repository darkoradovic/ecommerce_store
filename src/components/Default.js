import React, { Component } from 'react'

import Image from '../assets/404.png';

export default class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="nf" style={{backgroundColor:"white"}}>
      <div className="container bg-white">
        <div className="row">
          <div className="col-10  mx-auto text-center text-title text-uppercase pt-5 mb-5">
            <img   src={Image} alt="..."/>
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3> the requseted URL <span className="text-danger">
              {this.props.location.pathname}
            </span> was not found</h3>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
