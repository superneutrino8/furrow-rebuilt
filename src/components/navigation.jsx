import React from "react"
import { Link } from "gatsby"
// Styled Component
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  CloseNav,
} from "../styles/navigationStyles"
import { Container, Flex } from "../styles/globalStyles"

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <NavHeader>
          <Flex spaceBetween>
            <h3>Projects</h3>
            <CloseNav>
              <button>
                <span></span>
                <span></span>
              </button>
            </CloseNav>
          </Flex>
        </NavHeader>
      </Container>
      <NavList>
        <ul>
          <li>
            <Link>
              <div className="link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span>Too Humble</span>
              </div>
            </Link>
          </li>
        </ul>
      </NavList>
      <NavFooter></NavFooter>
    </Nav>
  )
}

export default Navigation
