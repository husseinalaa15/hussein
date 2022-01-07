import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav,Container,Offcanvas,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import hussein from "../images/work/hussein.png"
export const NavHeader = () => {
    return (
       
            <Navbar expand="lg" variant="light" bg="light">
                   <div className='navBrand'>
                    <li className="nav-item navBrand">
                        <Link to ="/"> Hussein  Alaa </Link>
                        
                        </li>
                    </div>
      
                    
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                <Nav className="m-auto navLinks">
                    
                    <li className="nav-item">
                     <Link    to ="/work">Work</Link>
                     <div className='line'></div>
                    </li> 
                    <li className="nav-item">
                     <Link    to ="/About">About Me</Link>
                      <div className='line'></div>

                    </li> 
                    <li className="nav-item">
                     <Link    to ="/Section">Skills</Link>
                      <div className='line'></div>

                    </li> 
                    <li className="nav-item">
                     <Link    to ="/Contact">Contact</Link>
                      <div className='line'></div>

                    </li> 
                   
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
    )
}
