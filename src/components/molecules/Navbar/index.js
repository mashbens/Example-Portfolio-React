import React from 'react';
import {
  Nav, 
  NavbarContainer, 
  NavLinks, 
  NavMenu, 
  NavItem, 
  Img
} from './NavbarElements'

class Navbar extends React.Component {
  constructor(props){
    super()

  }
  render () {
    return (
      <>
      <Nav>
        <NavbarContainer>
          <NavLinks to='/'>
            <Img />
          </NavLinks>
          <NavMenu>
            <NavItem>
              <NavLinks to={'/about'}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={'/education'}>Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={'/experiences'}>Experiences</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={'/interests'}>Interests</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={'/awards'}>Awards</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={'/skills'}>Skills</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>  
    )
  }
}

export default Navbar;








