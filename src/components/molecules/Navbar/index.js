import React from 'react';
import {
  Nav, 
  NavbarContainer, 
  NavLinks, 
  NavMenu, 
  NavItem, 
  Img
} from './NavbarElements'

const Navbar = () => {
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
};

export default Navbar;







// export default function Navbars() {
//   return (
//     <div>
//       <nav className='sidenav'>
//         <>
//           <ul><Link className='linkitem' to={'/'}>Home </Link></ul>
//           <ul> <Link className='linkitem' to={'/about'}>About </Link> </ul>
//           <ul><Link className='linkitem' to={'/education'}>Education </Link></ul> 
//           <ul><Link className='linkitem' to={'/experiences'}>Experiences </Link></ul>
//           <ul><Link className='linkitem' to={'/interests'}>Interests </Link></ul>
//           <ul><Link className='linkitem' to={'/awards'}>Awards</Link></ul>
//           <ul><Link className='linkitem' to={'/skills'}>Skills </Link></ul>
//         </>
//       </nav>   
//     </div>
//   )
// }


