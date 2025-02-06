"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [letterColors, setLetterColors] = useState(
    "MERIT NATIONS".split("").map(() => "hsl(0, 100%, 50%)")
  )

  const animateLetterColors = () => {
    setLetterColors(prevColors => 
      prevColors.map((_, index) => 
        `hsl(${(Date.now() / 10 + index * 10) % 360}, 100%, 50%)`
      )
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Merit Nations Logo" width={65} height={65} />
          <span 
            className="font-bold text-xl"
            onMouseEnter={animateLetterColors}
          >
            {"MERIT NATIONS".split("").map((letter, index) => (
              <span
                key={index}
                style={{ color: letterColors[index] }}
                className="inline-block transition-colors duration-300"
              >
                {letter}
              </span>
            ))}
          </span>
        </Link>

        {/* Mobile Menu and Theme Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about-us">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#success-stories">
            Success Stories
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#resources">
            Resources
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact-us">
            Contact Us
          </Link>
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm md:hidden">
            <nav className="flex flex-col p-6 space-y-6 bg-background">
              <Link 
                className="text-lg font-medium hover:bg-accent hover:text-accent-foreground p-3 rounded-lg transition-colors" 
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                className="text-lg font-medium hover:bg-accent hover:text-accent-foreground p-3 rounded-lg transition-colors" 
                href="/about-us"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                className="text-lg font-medium hover:bg-accent hover:text-accent-foreground p-3 rounded-lg transition-colors" 
                href="/#success-stories"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link 
                className="text-lg font-medium hover:bg-accent hover:text-accent-foreground p-3 rounded-lg transition-colors" 
                href="/#resources"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                className="text-lg font-medium hover:bg-accent hover:text-accent-foreground p-3 rounded-lg transition-colors" 
                href="/contact-us"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex justify-between items-center mt-4">
                <Button>Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}