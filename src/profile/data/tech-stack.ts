import type { TechStack } from "../types/tech-stack";

export const BASE_URL =
  "https://pub-b95b26cb348242c59499397cac963ab5.r2.dev/images/tech-stack-icons";

export const TECH_STACK: TechStack[] = [
  {
    key: "ts",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "rust",
    title: "Rust",
    href: "https://www.rust-lang.org/",
    categories: ["Language"],
    theme: true,
  },

  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },

  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
  },
  {
    key: "solana",
    title: "Solana",
    href: "https://solana.com/",
    categories: ["Blockchain"],
  },
  {
    key: "anchor",
    title: "Anchor",
    href: "https://www.anchor-lang.com/",
    categories: ["Blockchain", "Framework"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
  },
];
