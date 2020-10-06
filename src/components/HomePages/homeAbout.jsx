import React from "react"
import { motion } from "framer-motion"

// Styled Component
import { Container, Flex } from "../../styles/globalStyles"
import { HomeAboutSection, About, Services } from "../../styles/homeStyles"

const HomeAbout = () => {
  return (
    <HomeAboutSection>
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </About>
          <Services>
            <h2>Services</h2>
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}


export default HomeAbout
