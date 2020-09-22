import React, { createContext, useContext, useReducer } from "react"

// Create Context, Create Reducer, Create Provider

// Define Context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

// Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme, //should be key - value
      }
    }
    default: {
      throw new Error(`Unhandled Action Type: ${action.type}`)
    }
  }
}

// Provider
export const GlobalProvider = ({ children }) => {
  // inital state
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem("Theme") === null
        ? "dark"
        : window.localStorage.getItem("Theme"),
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

// export global
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
