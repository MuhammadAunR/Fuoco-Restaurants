'use client'
import React, { createContext, useContext, useState } from 'react'

export const ContextProvider = createContext()

export const useDrawer = () => useContext(ContextProvider)

const DrawerContext = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <>
            <ContextProvider.Provider value={{ toggleDrawer, isDrawerOpen }}>
                {children}
            </ContextProvider.Provider>
        </>
    )
}

export default DrawerContext
