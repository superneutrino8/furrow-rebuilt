import React, { useRef, useEffect } from "react"

// Styled Components
import {
  Banner,
  Video,
  Canvas,
  BannerTittle,
  Heading,
} from "../../styles/homeStyles"

// Custom Hooks
import { useWindowSize } from "../../hooks/useWindowSize"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

const HomeBanner = () => {
  const canvasRef = useRef(null)

  const windowSize = useWindowSize()

  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    const renderBoard = canvasRef.current
    const drawingBoard = renderBoard.cloneNode()

    const renderCtx = renderBoard.getContext("2d")
    const drawingCtx = drawingBoard.getContext("2d")

    renderCtx.globalCompositeOperation = "source-over"
    renderCtx.fillStyle = (currentTheme === "dark" ? "#000" : "#fff")
    renderCtx.fillRect(0, 0, windowSize.width, windowSize.height)

    return () => {}
  }, [currentTheme])

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
      <Canvas ref={canvasRef} />
      <BannerTittle>
        <Heading>DIG</Heading>
        <Heading>DEEP</Heading>
      </BannerTittle>
    </Banner>
  )
}

export default HomeBanner
