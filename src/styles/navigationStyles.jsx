import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled.div`
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
  top: 72px;
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
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      font-weight: 900;
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
          svg {
            width: 100px;
            path {
              fill: ${props => props.theme.background};
            }
          }
        }
      }
    }
  }
`

export const NavFooter = styled.div``
