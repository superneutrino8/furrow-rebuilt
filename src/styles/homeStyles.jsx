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

export const HomeFeatureSection = styled(motion.div)`
  position: relative;
  margin: 200px 0;
  width: 100%;
  /* margin-bottom: 250px; */
  a {
    position: relative;
    width: 100%;
    display: block;
  }
`

export const FeaturedContent = styled(motion.div)`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  z-index: 11;
  padding: 1rem 2rem;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  height: 480px;
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
    top: 400px;
    h2 {
      font-size: 3.5rem;
      margin: 0;
      padding: 0;
      line-height: 0.8;
    }
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 19px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.color};
        }
      }
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
  /* margin-bottom: 100px; */
  video {
    overflow: hidden;
    object-fit: cover;
  }
`

export const FeaturedProject = styled.div`
  margin-top: 36px;
  display: block;
  box-sizing: border-box;
  button {
    padding: 0.8rem 2.5rem;
    border: 0;
    background: ${props => props.theme.red};
    position: relative;
    span {
      color: ${props => props.theme.color};
      text-transform: uppercase;
      font-weight: 800;
      display: block;
      margin-right: 28px;
      margin-left: -15px;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      display: inline-block;
      top: 50%;
      right: 20px;
      height: 4px;
      width: 20px;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -5px;
    }
    &:after {
      margin-top: 5px;
    }
  }
`

// Home About Section

export const HomeAboutSection = styled(motion.div)`
  margin-bottom: 200px;
`

export const About = styled.div`
  width: 100%;
  h2 {
    line-height: 3rem;
    font-size: 2.5rem;
    width: 82%;
    color: ${props => props.theme.color};
    font-weight: 400;
    margin: 0;
  }
  p {
    line-height: 1.6rem;
    font-size: 1.2rem;
    width: 80%;
    color: ${props => props.theme.color};
  }
`

export const Services = styled.div`
  h2 {
    margin: 0;
  }
`

export const AccrodionHeader = styled(motion.div)`
  color: ${props => props.theme.red};
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: 10px;
  p {
    display: inline-block;
    margin-left: 10px;
    font-weight: 600;
  }
`
export const AccrodionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  span {
    width: 12px;
    height: 2px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`

export const AccrodionContent = styled(motion.div)`
  color: ${props => props.theme.red};
  margin-top: -15px;
  overflow: hidden;
  padding-left: 35px;
  span {
    display: block;
    margin: 8px 0;
  }
`
