"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TypesOfProgramsProps {
  activeProgram: "B.Sc" | "M.Sc"
}

export default function TypesOfPrograms({ activeProgram }: TypesOfProgramsProps) {
  const programs = {
    "B.Sc": [
      {
        name: "General Nursing",
        description: "Covers a broad range of nursing skills and knowledge applicable to various healthcare settings.",
      },
      {
        name: "Community Health Nursing",
        description: "Focuses on providing healthcare services to communities and promoting public health.",
      },
      {
        name: "Mental Health Nursing",
        description: "Specializes in caring for patients with mental health disorders and psychological issues.",
      },
    ],
    "M.Sc": [
      {
        name: "Medical-Surgical Nursing",
        description: "Advanced study of adult health nursing, focusing on complex medical and surgical conditions.",
      },
      {
        name: "Pediatric Nursing",
        description: "Specializes in the care of children from infancy through adolescence.",
      },
      {
        name: "Psychiatric Nursing",
        description:
          "Advanced study of mental health nursing, including therapeutic interventions and management of psychiatric disorders.",
      },
    ],
  }

  const [selectedProgram, setSelectedProgram] = useState(programs[activeProgram][0].name)

  return (
    <Card className="mb-12 rounded-3xl overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Types of {activeProgram} Nursing Programs</CardTitle>
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

