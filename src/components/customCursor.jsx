import React, { useState, useEffect } from "react"

import { Cursor } from "../styles/globalStyles"

const CustomCourser = () => {
  const [CursorPosition, setCursorPosition] = useState({
    x: 200,
    y: 400,
  })

  const MouseMove = event => {
    const { pageX: x, pageY: y } = event
    setCursorPosition({ x, y })
  }

  useEffect(() => {
    window.addEventListener("mousemove", MouseMove)
    return () => {
      window.removeEventListener("mousemove", MouseMove)
    }
  }, [])

  return (
    <>
      <Cursor
        style={{
          left: `${CursorPosition.x}px`,
          top: `${CursorPosition.y}px`,
        }}
      />
    </>
  )
}

export default CustomCourser
