import React from "react"

// Styled Components
import {
  Banner,
  Video,
  Canvas,
  BannerTittle,
  Heading,
} from "../../styles/homeStyles"

const HomeBanner = () => {
  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          src={require("../../assets/video/video.mp4")}
        />
      </Video>
      <Canvas />
      <BannerTittle>
        <Heading>DIG</Heading>
        <Heading>DEEP</Heading>
      </BannerTittle>
    </Banner>
  )
}

export default HomeBanner
