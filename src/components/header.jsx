import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

// Styled Component
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

// Custom Hook
import useElementPosition from "../hooks/useElementPosition"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Header = ({
  onMouse,
  toggleMenu,
  setToggleMenu,
  setHamburgerPosition,
}) => {
  const { currentTheme, cursorType } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const hambuger = useRef(null)
  const position = useElementPosition(hambuger)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  const menuHover = () => {
    onMouse("locked")
    setHamburgerPosition({ x: position.x, y: position.y + 100 })
  }

  useEffect(() => {
    window.localStorage.setItem("Theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.0, -0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween>
          <Logo
            onMouseEnter={() => onMouse("hovered")}
            onMouseLeave={() => onMouse("")}
          >
            <Link to="/">FURR</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onMouse("pointer")}
              onMouseLeave={() => onMouse("")}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu
            ref={hambuger}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={menuHover}
            onMouseLeave={() => onMouse("")}
          >
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
