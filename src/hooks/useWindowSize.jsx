import { useState, useEffect } from "react"

export const useWindowSize = () => {
  function getCurrentSize() {
    return {
      width: typeof window !== 'undefined' && window.innerWidth,
      height: typeof window !== 'undefined' && window.innerHeight,
    }
  }

  const [WindowSize, setWindowSize] = useState(getCurrentSize)

  useEffect(() => {
    function setWindow() {
      setWindowSize(getCurrentSize)
    }

    typeof window !== 'undefined' && window.addEventListener("resize", setWindow)

    return () => {
      typeof window !== 'undefined' && window.removeEventListener("resize", setWindow)
    }
  }, [])

  return WindowSize
}
