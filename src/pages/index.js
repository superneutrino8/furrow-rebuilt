import React from "react"
import Layout from "../components/layout"

import HomeBanner from "../components/HomePages/homeBanner"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const IndexPage = props => {
  const { currentTheme, cursorType } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onMouse = cursorType => {
    cursorType = (cursorType.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_STYLE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onMouse={onMouse} />
    </Layout>
  )
}

export default IndexPage
