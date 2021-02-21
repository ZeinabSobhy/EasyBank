import React, { createContext, useState } from "react"


export const ToggleContext = createContext()


export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)


  return (
    <ToggleContext.Provider
      value={{ state: toggle, setToggle: (value) => setToggle(value) }}
    >
      {children}
    </ToggleContext.Provider>
  )
}