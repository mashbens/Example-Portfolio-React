import styled from 'styled-components'
import {Link} from 'react-router-dom'
import myImage from '../../../res/Images/Img.png'

export const Nav = styled.nav`
  background-color: #BC5B3C;
  height: 100%;
  width: 280px;
  position: fixed;
  top: 0;
  left: 0;
`

export const NavbarContainer = styled.div`
    text-align: center;
    position: fixed; 
    margin-top: -20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 44px;
`

export const Img = styled.img.attrs({
  src: `${myImage}`})`
  width: 180px;
  border-radius: 50%;
  border: 5px solid #C77B61;
  padding:  0px;
`

export const NavMenu = styled.ul`
  padding-top: 20px;
`

export const NavItem = styled.ul`
    height: 30px;
    text-align: center;
    padding-top: 17px;
    margin-left: -80px;
    font-size: 1.4rem;
`
export const NavLinks = styled(Link)` 
    color: #fff;
    text-decoration: none;
    filter: brightness(85%);

    &:hover {
      font-weight: 300;

    }
    &:focus {
      font-weight: bold;
      filter: brightness(1);


    }
`
