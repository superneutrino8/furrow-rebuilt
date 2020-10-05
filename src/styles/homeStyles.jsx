import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 280px;
`

export const Video = styled.div`
  height: 100vh;
  width: 100%;

  video {
    object-fit: cover;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`

export const BannerTittle = styled(motion.h1)`
  position: absolute;
  /* top: 0; */
  left: -14px;
  bottom: -65px;
  font-weight: 900;
  color: ${props => props.theme.color};
  pointer-events: none;
`

export const Heading = styled(motion.span)`
  display: block;
  font-size: 13rem;
  line-height: 0.8;
`

// Home Content Block

export const HomeContentSection = styled(motion.div)`
  width: 58%;
  margin-left: 15%;
  font-size: 1rem;
  margin-bottom: 50px;
`

export const Content = styled.h2`
  font-weight: 400;
  color: ${props => props.theme.color};
`

// Home Feature Block

export const HomeFeatureSection = styled.div`
  position: relative;
  margin: 200px 0;
  width: 100%;
  margin-bottom: 250px;
  a {
    position: relative;
    width: 100%;
    display: block;
  }
`

export const FeaturedContent = styled.div`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  z-index: 11;
  padding: 1rem 2rem;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  h3 {
    font-size: 1.8rem;
  }
  .meta {
    align-self: center;
    h4 {
      display: inline-block;
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -120px;
    h2 {
      font-size: 5rem;
      margin: 0;
      padding: 0;
    }
  }
`

export const FeaturedVideo = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  height: 480px;
  border-radius: 20px;
  z-index: -1;
  width: 100%;
  margin-bottom: 100px;
  video {
    overflow: hidden;
    object-fit: cover;
  }
`

export const FeaturedProject = styled.div``
