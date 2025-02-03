"use client"

import { useState } from "react"

const exams = [
  {
    name: "NEET",
    description: "National Eligibility cum Entrance Test is the primary entrance exam for BDS admissions in India.",
  },
  {
    name: "AIIMS",
    description: "All India Institute of Medical Sciences conducts its own entrance exam for BDS admissions.",
  },
  {
    name: "JIPMER",
    description: "Jawaharlal Institute of Postgraduate Medical Education & Research holds a separate entrance test.",
  },
  {
    name: "State CETs",
    description: "Various states conduct their own Common Entrance Tests for BDS admissions in state colleges.",
  },
]

export default function EntranceExams() {
  const [selectedExam, setSelectedExam] = useState(0)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-3xl font-bold mb-4 font-serif">Top BDS Entrance Exams</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          {exams.map((exam, index) => (
            <button
              key={index}
              className={`block w-full text-left p-3 mb-2 border-2 border-black rounded-full text-lg font-medium transition-all duration-300 ease-in-out
                ${
                  selectedExam === index
                    ? "bg-black text-white"
                    : "bg-transparent hover:bg-blue-500 hover:text-white"
                }`}
              onClick={() => setSelectedExam(index)}
            >
              {exam.name}
            </button>
          ))}
        </div>
        <div className="md:w-2/3 md:pl-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="font-verdana text-lg">{exams[selectedExam].description}</p>
        </div>
      </div>
    </section>
  )
}
