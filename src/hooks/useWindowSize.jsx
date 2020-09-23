import { useState, useEffect } from "react"

export const useWindowSize = () => {
  function getCurrentSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [WindowSize, setWindowSize] = useState(getCurrentSize)

  useEffect(() => {
    function setWindow() {
      setWindowSize(getCurrentSize)
    }

    window.addEventListener("resize", setWindow)

    return () => {
      window.removeEventListener("resize", setWindow)
    }
  }, [])

  return WindowSize
}
