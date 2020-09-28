import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${props => props.theme.red};
  overflow: hidden;
  display: block;
  color: ${props => props.theme.color};
`

export const NavHeader = styled.div`
  top: 24px;
  position: relative;
  h3 {
    font-size: 2.5rem;
  }
`

export const CloseNav = styled.div`
  button {
    border: none;
    outline: none;
    background: none;
    transform-origin: center;
    padding: 20px;
    span {
      height: 4px;
      width: 28px;
      background-color: ${props => props.theme.color};
      display: block;
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  ul {
    padding: 0;
    li {

    }
  }
`

export const NavFooter = styled.div``
