import React from 'react';
import {NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default class BaseLayout extends React.Component{
    render(){
    return(
        <div className="container">
        <div className="Nav">    
            <Nav bsStyle="pills" activeKey={1} >
    <li><Link eventKey={1} to="/">Home</Link></li>
    <li><Link eventKey={2} to="/shop">Shop</Link></li>
    <li><Link eventKey={3} to="/About">About</Link></li>
    <li><Link eventKey={4} to="/contact">Contact</Link></li>
            </Nav> 
        </div>    
            {this.props.children}
                    <footer>
                        <small>&copy; Copyright 2058, Example Corporation</small>
                    </footer>
        </div>    
    )
}
}