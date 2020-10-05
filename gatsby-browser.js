import React from "react"

// Context
import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}
