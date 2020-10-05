import React from "react"
import { Link } from "gatsby"

// Styled Component
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeatureSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProject,
} from "../../styles/homeStyles"

const HomeFeature = () => {
  return (
    <HomeFeatureSection>
      <Container>
        <Link>
          <FeaturedContent>
            <Flex spaceBetween>
              <h3>Featured Project</h3>
              <div className="meta">
                <h4>PEI Seafood</h4>
                <h4>2019</h4>
              </div>
            </Flex>
            <div className="featured-title">
              <h2>
                NOT <br /> HUMBLE
              </h2>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </svg>
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
        <FeaturedProject></FeaturedProject>
      </Container>
    </HomeFeatureSection>
  )
}

export default HomeFeature
