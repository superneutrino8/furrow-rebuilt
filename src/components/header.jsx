import React from "react"
import { Link } from "gatsby"

// Styled Component
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const Header = () => {
  const currentTheme = useGlobalStateContext()
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween>
          {console.log(currentTheme)}
          <Logo>
            <Link to="/">FURR</Link>
            <span></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
