"use client"

import * as React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

export function ThemeLogo({ className, width = 150, height = 40 }: { className?: string, width?: number, height?: number }) {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <span className="text-xl font-bold tracking-tight">
                DeBrand <span className="text-primary">Studio</span>
            </span>
        )
    }

    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
        <Image
            src={currentTheme === 'dark' ? "/logo-white.svg" : "/logo-black.svg"}
            alt="DeBrand Studio"
            width={width}
            height={height}
            className={className}
            priority
        />
    )
}
