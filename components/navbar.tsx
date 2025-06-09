"use client"

import Link from "next/link"
import { Moon, Sun, PenTool } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-accent to-purple-accent"></div>
          <span className="text-xl font-bold">Srivani's Blog</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/add-blog">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <PenTool className="h-4 w-4 mr-2" />
              Write
            </Button>
          </Link>

          <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
