import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 500px;
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
