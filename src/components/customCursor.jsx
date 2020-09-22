import React, { useState, useEffect } from "react"

// COmponenets
import { Cursor } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const CustomCourser = () => {
  let { cursorType } = useGlobalStateContext()
  // cursorType = 'hovered';
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
        className={`${!!cursorType ? "hovered" : ""}`}
        style={{
          left: `${CursorPosition.x}px`,
          top: `${CursorPosition.y}px`,
        }}
      />
    </>
  )
}

export default CustomCourser
