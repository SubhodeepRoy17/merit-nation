"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, GraduationCap, Stethoscope, Briefcase, CheckCircle, Calendar, Pill } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import Slider from "react-slick"

// You need to import slick carousel styles for the carousel to work properly
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Define custom arrow components
interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  currentSlide?: number;
  slideCount?: number;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick, ...props }) => (
  <button
    {...props}
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg"
    style={{ zIndex: 10 }}
  >
    <ChevronLeft className="h-6 w-6" />
  </button>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick, ...props }) => (
  <button
    {...props}
    onClick={onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg"
    style={{ zIndex: 10 }}
  >
    <ChevronRight className="h-6 w-6" />
  </button>
 );

export default function HomePage() {
  const {} = useTheme()
  const [mounted, setMounted] = useState(false)

    const collegeDetails = [
    {
      image: "/college1.png",
      name: "IIT Delhi",
      description: "Hauz Khas in Delhi, India",
      link: "https://home.iitd.ac.in/"
    },
    {
      image: "/college2.png",
      name: "IIT Bombay",
      description: "Mumbai, Maharashtra, India",
      link: "https://www.iitb.ac.in/"
    },
    {
      image: "/college3.png",
      name: "IIT Madras",
      description: "Chennai, Tamil Nadu, India",
      link: "https://study.iitm.ac.in/ds/aboutIITM.html"
    },
    {
      image: "/college4.png",
      name: "IIMA Ahmedabad",
      description: "Ahmedabad, Gujarat, India",
      link: "https://www.iima.ac.in/"
    },
    {
      image: "/college5.png",
      name: "IIT Kanpur",
      description: "Kanpur, Uttar Pradesh, India",
      link: "https://www.iitk.ac.in/"
    }
  ]

  

  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Engineering Admissions",
      description: "Guidance for top engineering programs worldwide.",
      link: "/engineering",
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      title: "Medical Admissions",
      description: "Expert support for medical school applications.",
      link: "/medical",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "MBA Admissions",
      description: "Tailored assistance for top MBA programs.",
      link: "/mba",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Business Administration Admission",
      description: "Guidance for BBA and BCA admissions.",
      link: "/business",
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      title: "Nursing Admission",
      description: "Comprehensive support for B.Sc & M.Sc Nursing programs.",
      link: "/nursing",
    },
    {
      icon: <Pill className="h-12 w-12 text-primary" />,
      title: "Pharmacy Admission",
      description: "Admission guidance for B.Pharm & M.Pharm courses.",
      link: "/Pharmacy",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

        {/* Our Services Section with Carousel */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Services
            </h2>
            <Slider {...settings}>
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 space-y-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </Card>
              ))}
            </Slider>
          </div>
        </section>

        {/* Top Colleges Section with Carousel */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Top Colleges We Work With
            </h2>
            <Slider {...settings}>
              {collegeDetails.map((college, index) => (
                <div key={index} className="p-4">
                  <Card className="flex flex-col items-center text-center p-6 space-y-4 h-full">
                    <div className="w-[300px] h-[250px] bg-white shadow-lg rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={college.image}
                        alt={`${college.name} logo`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{college.name}</h3>
                    <p className="text-muted-foreground">{college.description}</p>
                    <Link href={college.link}>
                      <Button variant="default" className="mt-4">Apply Now</Button>
                    </Link>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Why Choose Us Section */}
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

        {/* Success Stories Section */}
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
                    &quot;MERIT NATIONS helped me achieve my dream of studying at a top university. Their guidance was
                      invaluable!&quot;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Helpful Resources Section */}
        <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Helpful Resources
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Application Deadlines</h3>
                <p className="text-muted-foreground">Stay on top of your application deadlines.</p>
                <Button variant="outline">View Deadlines</Button>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Scholarship Opportunities</h3>
                <p className="text-muted-foreground">Find scholarships and funding options for your education.</p>
                <Button variant="outline">View Scholarships</Button>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <Briefcase className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Career Counseling</h3>
                <p className="text-muted-foreground">Get expert advice on career opportunities.</p>
                <Button variant="outline">Learn More</Button>
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
                Let&apos;s work together to make your college admission dreams a reality.
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
