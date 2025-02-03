// merit-nation\src\app\page.tsx

"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, GraduationCap, Stethoscope, Briefcase, CheckCircle, Calendar } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/footer"

export default function HomePage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const collegeImages = [
    "/college1.png",
    "/college2.png",
    "/college3.png",
    "/college4.png",
    "/college5.png",
  ];

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/cover.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Empowering Your Future, One Admission at a Time
                </h1>
                <p className="mx-auto font-bold max-w-[700px] text-white/80 md:text-xl">
                  Expert guidance for Engineering, Medical, and MBA admissions to help you achieve your dreams.
                </p>
              </div>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Request a Free Consultation
              </Button>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Engineering Admissions</h3>
                <p className="text-muted-foreground">Guidance for top engineering programs worldwide.</p>
                <Button variant="outline">Learn More</Button>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <Stethoscope className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Medical Admissions</h3>
                <p className="text-muted-foreground">Expert support for medical school applications.</p>
                <Link href="/medical">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <Briefcase className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">MBA Admissions</h3>
                <p className="text-muted-foreground">Tailored assistance for top MBA programs.</p>
                <Button variant="outline">Learn More</Button>
              </Card>
            </div>
          </div>
        </section>
        <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Us?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">15+ Years of Experience</h3>
                  <p className="text-muted-foreground">Proven track record of success in admissions consulting.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">95% Success Rate</h3>
                  <p className="text-muted-foreground">Our students consistently get into their top-choice programs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                  <p className="text-muted-foreground">Tailored strategies to highlight your unique strengths.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Top Colleges We Work With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
              {collegeImages.map((url, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Image Frame */}
                  <div className="w-[200px] h-[300px] bg-white shadow-lg rounded-2xl overflow-hidden">
                    <Image
                      src={url}
                      alt={`College logo ${index + 1}`}
                      width={200}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* College Name */}
                  <p className="mt-2 text-sm font-semibold text-center text-gray-700">
                    College {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="success-stories" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Success Stories
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col space-y-4">
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    <Image
                      src={`/profile1.png`}
                      alt={`Student ${i}`}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Student Name</h3>
                      <p className="text-sm text-muted-foreground">Admitted to Top University</p>
                    </div>
                    <p className="text-muted-foreground">
                      "MERIT NATIONS helped me achieve my dream of studying at a top university. Their guidance was
                      invaluable!"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Helpful Resources
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Latest Blog Posts</h3>
                  <ul className="space-y-2">
                    {[
                      "Top 10 Engineering Schools in 2023",
                      "How to Ace Your Medical School Interview",
                      "MBA Application Trends for 2024",
                    ].map((post, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <Link href="#" className="text-primary hover:underline">
                          {post}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Upcoming Webinars</h3>
                  <ul className="space-y-4">
                    {[
                      "Mastering the Personal Statement",
                      "Navigating the MBA Application Process",
                      "MCAT Prep Strategies",
                    ].map((webinar, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">{webinar}</p>
                          <p className="text-sm text-muted-foreground">Date: TBA</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Let's work together to make your college admission dreams a reality.
              </p>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

