import React from "react"

// Icons
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

// Styled Component
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

const Footer = ({ onMouse }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>902.315.1279</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent wider>
            <p>15 Camburhill Ct Unit C</p>
            <p>Charlottetown, PE C1E 0E2</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onMouse("hovered")}
              onMouseLeave={() => onMouse("")}
              href="/"
            >
              <Instagram />
            </a>
            <a
              onMouseEnter={() => onMouse("hovered")}
              onMouseLeave={() => onMouse("")}
              href="/"
            >
              <Facebook />
            </a>
            <a
              onMouseEnter={() => onMouse("hovered")}
              onMouseLeave={() => onMouse("")}
              href="/"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
