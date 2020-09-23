import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.nav)`
  background-color: blueviolet;
  position: absolute;
  top: 52px;
  left: 0px;
  right: 0px;
  z-index: 99;
  height: 0px;
  width: 100%;
  pointer-events: none;
`

export const Logo = styled.div`
  a {
    color: ${props => props.theme.color};
    font-weight: 800;
    font-size: 1.8rem;
    letter-spacing: 2.5px;
    user-select: none;
  }
  span {
    height: 20px;
    width: 20px;
    background-color: ${props => props.theme.red};
    display: inline-block;
    border-radius: 100%;
    margin: 0 2px;
    margin-right: 2.5px;
    user-select: none;
  }
`
export const Menu = styled.div`
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
