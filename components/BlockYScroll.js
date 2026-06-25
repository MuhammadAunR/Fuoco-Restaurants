import React, { useEffect } from 'react'

const BlockYScroll = (isOpen) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            window.lenis?.stop()
        } else {
            document.body.style.overflow = ""
            window.lenis?.start()
        }
        return () => {
            document.body.style.overflow = ""
            window.lenis?.start()
        }
    }, [isOpen])
}

export default BlockYScroll