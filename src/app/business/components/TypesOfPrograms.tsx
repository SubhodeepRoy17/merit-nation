"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TypesOfProgramsProps {
  activeProgram: "BBA" | "BCA"
}

export default function TypesOfPrograms({ activeProgram }: TypesOfProgramsProps) {
  const programs = {
    "BBA": [
        {
            name: "Finance",
            description: "Focuses on financial management, investment analysis, banking, and corporate finance. Students gain knowledge about stock markets, risk management, and financial decision-making, preparing them for careers in banking, investment firms, and financial consultancy."
        },
        {
            name: "Marketing",
            description: "Covers market research, consumer behavior, branding, and digital marketing strategies. Students learn how to develop marketing campaigns, analyze customer trends, and manage brand positioning. This specialization is ideal for careers in advertising, sales, and brand management."
        },
        {
            name: "Human Resource Management",
            description: "Emphasizes talent acquisition, employee relations, performance management, and organizational behavior. Students learn how to manage workforce dynamics, recruitment processes, and employee engagement strategies, preparing them for HR roles in various industries."
        },
    ],
    "BCA": [
        {
            name: "Software Development",
            description: "Covers programming languages, software engineering principles, and application development. Students gain hands-on experience in coding, debugging, and building software solutions. This specialization is ideal for careers as software developers, app developers, or system engineers."
        },
        {
            name: "Data Science & Analytics",
            description: "Focuses on big data, machine learning, and statistical analysis. Students learn how to collect, process, and analyze data to generate insights and predictions. This specialization prepares students for roles such as data analysts, data scientists, and business intelligence professionals."
        },
        {
            name: "Cybersecurity",
            description: "Covers network security, ethical hacking, and digital forensics. Students learn how to protect computer systems, prevent cyber threats, and ensure data privacy. This specialization is ideal for careers in cybersecurity, ethical hacking, and IT risk management."
        }
    ]
}

  const [selectedProgram, setSelectedProgram] = useState(programs[activeProgram][0].name)

  return (
    <Card className="mb-12 rounded-3xl overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Types of {activeProgram} Pharmacy Programs</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <div className="w-1/3 pr-4 border-r">
          {programs[activeProgram].map((program) => (
            <button
            key={program.name}
            onClick={() => setSelectedProgram(program.name)}
            className={`block w-full text-left p-4 mb-2 rounded-full border-2 border-black dark:border-white
            transition-all duration-300 ease-in-out
            ${
                selectedProgram === program.name
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "bg-transparent hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white"
            }`}
        >
            {program.name}
        </button>  
          ))}
        </div>
        <div className="w-2/3 pl-4">{programs[activeProgram].find((p) => p.name === selectedProgram)?.description}</div>
      </CardContent>
    </Card>
  )
}

