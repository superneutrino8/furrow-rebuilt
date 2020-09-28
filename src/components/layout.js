import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from "./header"
import CustomCourser from "./customCursor"
import Navigation from "./navigation"

// Styled Component
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// Global Styles
const GlobalStyles = createGlobalStyle`

  ${normalize}

  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    transition: all 0.2s ease-in-out;
  }
`

const darkTheme = {
  background: "#121212",
  color: "#FAFAFA",
  red: "#ea291e",
}

const lightTheme = {
  background: "#FAFAFA",
  color: "#121212",
  red: "#ea291e",
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { currentTheme, cursorType } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onMouse = cursorType => {
    cursorType = (cursorType.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_STYLE", cursorType: cursorType })
  }

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <CustomCourser />
      <Header onMouse={onMouse} />
      <Navigation />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
