"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Ensure component is mounted before rendering theme-dependent UI
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Show a neutral state until mounted to avoid hydration mismatch
    if (!mounted) {
        return (
            <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    const currentTheme = theme === "system" ? resolvedTheme : theme
    const isDark = currentTheme === "dark"

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
