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
      title: "Senior Frontend Developer & UI Design Lead",
      company: "Simplamo",
      website: "https://simplamo.com?ref=IN-926722",
    },
    {
      title: "Founder",
      company: "Quaric",
      website: "https://quaric.com",
    },
  ],
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  about: `
- **Design Engineer** with **5+ years of experience**, known for pixel-perfect execution and strong attention to small details.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Creator of [ZaDark](https://zadark.com) (2022): enhances the Zalo experience on PC & Web
  - **80k+ downloads** on [SourceForge](https://sourceforge.net/projects/zadark)
  - **30k+ active users** on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob)
- Creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com): iOS-like wheel picker with inertia scrolling & infinite loop
  - **10k+ weekly downloads** on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker)
  - [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort
`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1764345394",
  namePronunciationUrl: "/audio/rohitdhakane.mp3",
  timeZone: "IST",
  keywords: ["Rohit", "Dhakane", "Rohit Dhakane"],
  dateCreated: "2023-10-20", // YYYY-MM-DD
} satisfies User;
