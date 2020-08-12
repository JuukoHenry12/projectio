import * as React from 'react'
//import Link from 'next/link'

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";

const Navbar: React.FunctionComponent = () => {
  return (
    <HeaderNavigation>
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>Account For Your Business</StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.center} />
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <StyledLink href='/'>
          Login 
        </StyledLink>
        </StyledNavigationItem>
        
      <StyledNavigationItem>
        <StyledLink href='/TableDetails'>
          Table Data
        </StyledLink>
      </StyledNavigationItem>

      <StyledNavigationItem>
        <StyledLink href='/'>
          Logout
        </StyledLink>
        </StyledNavigationItem>
    </StyledNavigationList>
    </HeaderNavigation>
  )  
}

export default Navbar