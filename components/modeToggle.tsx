"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/app/lib/context/themeContext"

export function ModeToggle() {
  const { theme , toggleTheme } = useTheme()

  return (
        <Button variant="outline" onClick={toggleTheme} size="icon" className="w-9 px-0">
          {
            theme === 'light' ?  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" /> : <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          }
         
          
          
        </Button>
  )
}
