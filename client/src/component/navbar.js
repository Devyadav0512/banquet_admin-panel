import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import classes from "../CSS/navbar.module.css";
import {Link} from "react-scroll";
import { Icon } from '@iconify/react';
import partyPopper from '@iconify/icons-twemoji/party-popper';


const CustomNavbar = ()=>{
    return(
        <>
        <div>
        <Navbar style={{fontFamily:"Lexend Giga" }} bg="light" expand="lg" fixed="top">
            <Navbar.Brand> <Icon icon={partyPopper} />Lets Make it Special<Icon icon={partyPopper} /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{margin:"0 0 0 auto"}} className="navlinks">
                
                <Link activeClass="active"
                    to="getStarted"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >Home</Link>
               
            
                <Link activeClass="active"
                    to="about"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >About Us</Link>
    
                <Link activeClass="active"
                    to="Menu"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >Menu</Link>

                <Link activeClass="active"
                    to="Facilities"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >Facilities</Link>

                    <Link activeClass="active"
                    to="Gallery"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >Gallery</Link>

                    <Link activeClass="active"
                    to="Review"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >Customer Review</Link>


               
                <Link activeClass="active"
                    to="contact"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={2000}
                    offset={-50}
                    >Contact Us</Link>
                
                
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        </>
    )
}
export default CustomNavbar;