"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TypesOfProgramsProps {
  activeProgram: "B.Pharm" | "M.Pharm"
}

export default function TypesOfPrograms({ activeProgram }: TypesOfProgramsProps) {
  const programs = {
    "B.Pharm": [
        {
            name: "Pharmaceutical Chemistry",
            description: "Focuses on the chemical aspects of drug design, development, and synthesis. Students learn about the principles of medicinal chemistry and how different chemical compounds interact in the body. It plays a vital role in discovering new drugs and improving existing ones."
        },
        {
            name: "Pharmacology",
            description: "Covers the study of drug action, including mechanisms, effects, and interactions. Students explore how drugs influence biological systems and their therapeutic uses. This field is crucial for developing safe and effective medications."
        },
        {
            name: "Pharmaceutics",
            description: "Deals with the formulation, manufacturing, and delivery of drugs. Students learn about different dosage forms such as tablets, capsules, and injections. This field ensures that medications are safe, stable, and effective for patient use."
        },
    ],
    "M.Pharm": [
        {
            name: "Pharmaceutical Analysis",
            description: "Focuses on the quality control and assurance of pharmaceutical products. Students learn various analytical techniques such as chromatography and spectroscopy. This specialization ensures the safety, efficacy, and purity of drugs."
        },
        {
            name: "Pharmacognosy",
            description: "Involves the study of medicinal plants and natural products used in drug development. Students explore the extraction, isolation, and therapeutic applications of bioactive compounds. It plays a key role in herbal medicine and alternative therapies."
        },
        {
            name: "Pharmacy Practice",
            description: "Emphasizes patient care, drug dispensing, and clinical pharmacy. Students learn about hospital and community pharmacy operations, medication management, and patient counseling. This specialization bridges the gap between pharmacists and healthcare providers."
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

