import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Styled Component
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeatureSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProject,
} from "../../styles/homeStyles"

const HomeFeature = ({ onMouse }) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])

  return (
    <HomeFeatureSection
      ref={featuredRef}
      initial="hidden"
      animate={animation}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Link>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onMouse("hovered")}
            onMouseLeave={() => onMouse("")}
          >
            <Flex spaceBetween>
              <h3>Featured Project</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h4>PEI Seafood</h4>
                <h4>2019</h4>
              </motion.div>
            </Flex>
            <div className="featured-title">
              <h2>
                NOT <br /> HUMBLE
              </h2>
              <div className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </div>
            </div>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              src={require("../../assets/video/featured-video.mp4")}
              loop
              autoPlay
            />
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
        <FeaturedProject>
          <Flex flexEnd>
            <button>
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProject>
      </Container>
    </HomeFeatureSection>
  )
}

export default HomeFeature
