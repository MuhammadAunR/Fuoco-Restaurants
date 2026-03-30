'use client'
import React, { createContext, useState } from 'react'

export const ContextProvider = createContext()

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
