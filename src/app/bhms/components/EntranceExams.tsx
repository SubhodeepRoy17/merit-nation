"use client"

import { useState } from "react"

const exams = [
  {
    "name": "NEET",
    "description": "National Eligibility cum Entrance Test, conducted nationwide for admission to medical courses, including BHMS."
  },
  {
    "name": "KEAM",
    "description": "Kerala Engineering, Architecture & Medical exam, a state-level test for admission to medical courses including BHMS in Kerala."
  },
  {
    "name": "IPU CET",
    "description": "Indraprastha University Common Entrance Test, conducted by GGSIPU for admission to BHMS and other medical courses."
  },
  {
    "name": "PUCET",
    "description": "Panjab University Common Entrance Test for undergraduate medical programs, including BHMS, in affiliated colleges."
  },
  {
    "name": "OJEE",
    "description": "Odisha Joint Entrance Examination, a state-level test for admission into various medical courses, including BHMS."
  },
  {
    "name": "BVP CET",
    "description": "Bharati Vidyapeeth Common Entrance Test for admission to BHMS and other medical programs offered by Bharati Vidyapeeth University."
  },
  {
    "name": "RUHS Entrance Exam",
    "description": "Rajasthan University of Health Sciences exam for admission into homeopathy and other medical courses in Rajasthan."
  },
]

export default function EntranceExams() {
  const [selectedExam, setSelectedExam] = useState(0)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-3xl font-bold mb-4 font-serif">Top BHMS Entrance Exams</h2>
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
