'use client'

import React from 'react'

/**
 * Sidebar switching parameters 0-switch 1-open 2-close
 */
export type SidebarAlways = 0 | 1 | 2

interface SidebarContextType {
  openSidebar: boolean
  setSidebar?: (always: SidebarAlways) => void
}

export const UseSidebar = React.createContext<SidebarContextType>({
  openSidebar: true,
})

function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [openSidebar, setOpenSidebar] = React.useState(true)

  function setSidebar(always: SidebarAlways = 0) {
    const actions = {
      0: () => setOpenSidebar(!openSidebar),
      1: () => setOpenSidebar(true),
      2: () => setOpenSidebar(false),
    }

    actions[always]()
  }

  return (
    <UseSidebar.Provider value={{ openSidebar, setSidebar }}>
      {children}
    </UseSidebar.Provider>
  )
}

export default SidebarProvider
