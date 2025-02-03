//merit-nation\src\components\Header.tsx

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold text-xl">MERIT NATIONS</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#why-choose-us">
            Why Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#success-stories">
            Success Stories
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#resources">
            Resources
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex">Get Started</Button>
        </div>
      </div>
    </header>
  )
}