"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useRef } from "react"

export default function Header() {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const letters = letterRefs.current
    let frames = 0

    const animateColors = () => {
      frames++
      letters.forEach((letter, index) => {
        if (letter) {
          const hue = (frames + index * 10) % 360
          letter.style.color = `hsl(${hue}, 100%, 50%)`
        }
      })
      requestAnimationFrame(animateColors)
    }

    animateColors()

    return () => cancelAnimationFrame(frames)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Merit Nations Logo" width={65} height={65} />
          <span className="font-bold text-xl">
            {"MERIT NATIONS".split("").map((letter, index) => (
              <span
                key={index}
                ref={(el) => { letterRefs.current[index] = el }}
                className="inline-block transition-colors duration-300"
              >
                {letter}
              </span>
            ))}
          </span>
        </Link>
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
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

