"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/footer"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <motion.h2
              className="text-3xl font-semibold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              At College Admission Experts, we are dedicated to guiding students through the complex college admission
              process. Our mission is to empower students to reach their full potential and gain admission to their
              dream colleges.
            </motion.p>
            <motion.h2
              className="text-3xl font-semibold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              We believe in a personalized approach, tailoring our services to each student&apos;s unique strengths,
              interests, and goals. Our team of experienced consultants provides expert guidance on every aspect of the
              college application process.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Image
              src="/cover2.png"
              alt="College students"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jane Doe", role: "Founder & Lead Consultant" },
              { name: "John Smith", role: "Essay Specialist" },
              { name: "Emily Brown", role: "Admissions Strategist" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
              >
                <Image
                  src={`/placeholder.svg?height=150&width=150&text=${member.name}`}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-1l md:text-2l">
                    <u>INDIA ADMISSIONS</u>
                </h2>
                <p className="mx-auto max-w-full text-primary-foreground/80 md:text-xl">
                    UG COURSE : MBBS | BDS | NURSING | B.Tech | B.Pharma | BBA | BCA | LLB 
                    <br />
                    PG COURSE : MD | MDS | M.PHARM | MBA | MCA | MCI | DCI | INC | BCI | PCI | AICTE APPROVED
                </p>
                <div className="w-full text-primary-foreground/80">
                    <p className="mx-auto max-w-full text-primary-foreground/80 sm:text-l text-center">
                    ALL ADMISSIONS ARE SUBJECT TO GOVT. OF INDIA AND COLLEGE GUIDELINE
                    </p>

                    {/* Full-width divider */}
                    <div className="w-full px-4">
                    <div className="border-t border-white dark:border-black my-4 w-full"></div>
                    </div>

                    <p className="mx-auto max-w-full text-primary-foreground/80 md:text-xl text-center">
                    P.S. - Abacus, Newtown, Action Area, IIE, Kolkata - 700161, 3rd Floor, Unit-311
                    <br />
                    Contact No. : +91 9810921650
                    </p>
                </div>
                </div>
            </div>
        </section>
      </main>
        <Footer />
    </div>
  )
}

