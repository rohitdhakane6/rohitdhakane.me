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
    id: "igurus",
    companyName: "iGurus",
    companyLogo: "https://www.igurus.in/static/images/favicon.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "d1f2b3c4-5678-90ab-cdef-1234567890ab",
        title: "Frontend Intern",
        employmentPeriod: {
          start: "05.2025",
          end: "08.2025",
        },
        employmentType: "Internship",
        description: `- Developed and maintained the [**iGurus**](https://www.igurus.in/) website using **Next.js**, **Tailwind CSS**, and **TypeScript**.  
        - Implemented responsive design and optimized performance for better user experience.  
        - Collaborated with the design team to create visually appealing and user-friendly interfaces.  
        - Assisted in debugging and troubleshooting issues to ensure smooth functionality.  
        `,
        icon: "code",
        skills: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn Ui"],
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
        description: `Completed Bachelor's in Computer Engineering (2021–2025) at Dr. D. Y. Patil College of Engineering and Innovation, Pune.  
Focused on software development, data structures, algorithms, and modern web technologies.  

- Built projects using JavaScript, TypeScript, and React  
- Strong foundation in Data Structures & Algorithms  
- Experience with databases and distributed systems  
- Applied principles of software engineering & system design  
- Active participation in teamwork, presentations, and research  
- Self-driven learner with hands-on coding experience  `,
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
