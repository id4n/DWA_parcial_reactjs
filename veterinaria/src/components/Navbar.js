import React, { Component } from 'react';
import './../css/navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white h2 link">
                    {this.props.title}
                </a>
            </nav>
        )
    }
}
export default Navbar;