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

const HomeBanner = ({ onMouse }) => {
  const canvasRef = useRef(null)

  const windowSize = useWindowSize()

  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    const renderBoard = canvasRef.current
    const drawingBoard = renderBoard.cloneNode()

    const renderCtx = renderBoard.getContext("2d")
    const drawingCtx = drawingBoard.getContext("2d")

    renderCtx.globalCompositeOperation = "source-over"
    renderCtx.fillStyle = currentTheme === "dark" ? "#000" : "#fff"
    renderCtx.fillRect(0, 0, windowSize.width, windowSize.height)

    let lastX
    let lastY
    let moving = false

    renderBoard.addEventListener("mouseover", e => {
      moving = true
      lastX = e.pageX - renderBoard.offsetLeft
      lastY = e.pageY - renderBoard.offsetTop
    })

    renderBoard.addEventListener("mouseup", e => {
      moving = false
      lastX = e.pageX - renderBoard.offsetLeft
      lastY = e.pageY - renderBoard.offsetTop
    })

    renderBoard.addEventListener("mousemove", e => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderCtx.globalCompositeOperation = "destination-out"
        let currentX = e.pageX - renderBoard.offsetLeft
        let currentY = e.pageY - renderBoard.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderCtx.drawImage(drawingBoard, 0, 0)
      }
    })

    return () => {}
  }, [currentTheme])

  const parent = {
    initial: {
      y: 800,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: {
      y: 800,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

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
      <Canvas
        height={windowSize.height}
        width={windowSize.width}
        ref={canvasRef}
        onMouseEnter={() => onMouse("hovered")}
        onMouseLeave={() => onMouse("")}
      />
      <BannerTittle variants={parent} initial='initial' animate='animate'>
        <Heading variants={child}>
          DIG
        </Heading>
        <Heading variants={child}>
          DEEP
        </Heading>
      </BannerTittle>
    </Banner>
  )
}

export default HomeBanner
