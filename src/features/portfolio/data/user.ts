import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Rohit",
  lastName: "Dhakane",
  displayName: "Rohit Dhakane",
  username: "rohitdhakane6",
  resumeUrl:
    "https://drive.google.com/file/d/1i4kg8fB9u7OZiU3lmprsqYSzs-f1umzn/preview",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Design Engineer",
    "Open Source Contributor",
  ],
  address: "Pune, Maharashtra, India",
  phoneNumber: "KzkxODI2Mjg5MzU5MA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "cm9oaXRkaGFrYW5lNkBnbWFpbC5jb20=", // base64 encoded
  website: "https://rohitdhakane.in",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Building ExpenseAI",
      company: "ExpenseAI",
      website: "https://expenseai.tech",
    },
  ],
  //   about: `Hello, World! I am Rohit Dhakane — a Full Stack Engineer passionate about building high-performance, user-focused software solutions that merge clean design with robust engineering.

  // With strong expertise in Next.js, React, TypeScript, Node.js, and Prisma, I specialize in developing scalable, modern web applications. I enjoy tackling complex backend challenges, creating intuitive frontends, and ensuring every detail aligns for a seamless user experience.

  // Beyond work, I’m constantly exploring new technologies — from real-time WebSocket systems to blockchain integrations on Solana — and bringing ideas to life through personal projects. I’ve worked on diverse applications, including a crypto exchange platform, a Zapier-like automation tool, phishing website detection systems, and advanced form builders.

  // One of my current focuses, [ExpenseAI](https://expenseai.tech), is designed to make expense tracking smarter with AI-driven insights, aiming to help individuals and businesses save time and money.

  // I believe in the power of open-source collaboration, continuous learning, and designing solutions that matter. Let’s connect and build something extraordinary!,`,

  about: `## Hello, World! 👋

I’m **Rohit Dhakane**, a **Full Stack Engineer** passionate about building high-performance, user-focused software that blends **clean design** with **robust engineering**.

I specialize in developing **scalable, modern web applications** using **Next.js, React, TypeScript, Node.js, and Prisma**. I enjoy solving complex backend problems, crafting intuitive frontends, and paying close attention to details that create a seamless user experience.

Beyond work, I’m constantly exploring new technologies — from **real-time WebSocket systems** to **blockchain integrations on Solana** — and turning ideas into real products. I’ve built and worked on projects such as:
- a **crypto exchange platform**
- a **Zapier-like automation tool**
- **phishing website detection systems**
- **advanced form builders**

One of my current focuses is **[ExpenseAI](https://expenseai.tech)** — a product designed to make expense tracking smarter with **AI-driven insights**, helping individuals and businesses save both time and money.

I believe in **open-source collaboration**, **continuous learning**, and building solutions that genuinely matter.  
Let’s connect and build something meaningful 🚀
`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1764345394",
  namePronunciationUrl: "/audio/rohitdhakane.mp3",
  timeZone: "IST",
  keywords: ["Rohit", "Dhakane", "Rohit Dhakane"],
  dateCreated: "2023-10-20", // YYYY-MM-DD
} satisfies User;
