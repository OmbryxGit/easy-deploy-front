"use client"
import { useTheme } from '@/app/lib/context/themeContext';
import React from 'react'



function ToggleButton() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div
            onClick={() => {

                toggleTheme()
                console.log("theme changed : ", theme)
            }}
        >toggleButton</div>
    )
}

export default ToggleButton