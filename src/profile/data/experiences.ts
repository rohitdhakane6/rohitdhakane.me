import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    isCurrentEmployer: true,
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Part-time",

        description: `- Built an **Agendria**, a SaaS platform combining task management, meeting scheduling, health tracking, and money/expense management in a single application..
- Performed bug fixing and feature improvements using **React**, **Tailwind CSS**, and **Supabase** as a serverless backend.
`,
        icon: "code",
        skills: ["React", " Tailwind CSS", "Supabase", "TypeScript"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Dr. D. Y. Patil College of Engineering and Innovation, Pune",
        employmentPeriod: {
          start: "2021",
          end: "2025",
        },
        employmentType: "Bachelor's Degree",
        employmentUrl: "https://www.dypcoei.edu.in/",
        description: `- Pursuing a Bachelor's degree in Computer Engineering.`,
        icon: "education",
        skills: [
          "JavaScript",
          "TypeScript",
          "React",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "New Art & Science Junior College,Amalner Beed",
        employmentPeriod: {
          start: "2020",
          end: "2021",
        },
        employmentType: "Higher Secondary Certificate (12th Grade)",
        icon: "education",
        description: ``,
        skills: [],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "New English School, Hatola Beed",
        employmentPeriod: {
          start: "2018",
          end: "2019",
        },
        employmentType: "Secondary School Certificate (10th Grade)",
        icon: "education",
        description: ``,
        skills: [],
      },
    ],
  },
];
