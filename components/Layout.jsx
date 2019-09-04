import { createContext, useState, useContext } from "react"

const StoreContext = createContext({
  nav: false,
})

export const useStore = () => useContext(StoreContext)

export default function Layout({ children }) {
  const [store, setstore] = useState({ nav: false, tour: false })

  const toggleNav = () => {
    setstore({ ...store, nav: !store.nav })
  }

  const toggleTour = () => {
    setstore({ ...store, tour: !store.tour })
  }

  return (
    <StoreContext.Provider value={{ store, setstore, toggleNav, toggleTour }}>
      <div css={{ display: "flex" }}>{children}</div>
    </StoreContext.Provider>
  )
}
