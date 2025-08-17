import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "meta2d",
    title: "2D Metaverse",
    period: {
      start: "09.2024",
    },
    link: "https://github.com/rohitdhakane6/metaverse-2d",
    thumbnailSrc:
      "https://assets.rohitdhakane.me/images/projects/metaverse.jpg",
    videoSrc: "https://www.youtube.com/embed/mfTjfQPs1gM?si=AxTJCnE3owhskzCS",
    skills: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "Phaser.js",
      "WebRTC",
      "MediaSoup",
      "PostgreSQL",
    ],
    description: ` A multiplayer 2D metaverse where users can explore, interact, and communicate in real time.  
It combines gaming elements with social features like chat and video calls.  

- 🌐 Multiplayer 2D virtual world  
- 🎮 Interactive environments built with Phaser.js  
- ⚡ Real-time updates via Socket.IO  
- 🎤 Video & audio chat powered by WebRTC + MediaSoup  
- 🗄️ PostgreSQL for storing user and session data  
- 👥 Users can move, chat, and engage in virtual spaces   `,

    isExpanded: true,
  },
  {
    id: "phishing-detection",
    title: "Phishing Website Detection Using Machine Learning",
    period: {
      start: "07.2024",
      end: "02.2025",
    },
    link: "https://github.com/rohitdhakane6/Phishing-Detection",
    thumbnailSrc:
      "https://assets.rohitdhakane.me/images/projects/Phishing-Detection.png",
    skills: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Clerk Auth",
      "Python",
      "Flask",
      "Machine Learning",
    ],
    description: `A real-time phishing detection system that helps users stay safe from fake or harmful websites. It uses a **Next.js frontend**, a **Flask backend**, and a **browser extension** for live protection.  

- Easy-to-use website built with **Next.js**  
- **Flask backend** with a machine learning model to check websites  
- **Browser extension** for real-time URL scanning while you browse  
- Sends **instant alerts** if a site looks unsafe  
- Shows **detailed reports** about suspicious websites  
- Fast and lightweight, so it runs smoothly in the background  
`,
    isExpanded: false,
  },
  {
    id: "web-wallet",
    title: "Web Based Wallet",
    period: {
      start: "04.2025",
      end: "05.2025",
    },
    link: "https://web-wallet-jade-six.vercel.app",
    thumbnailSrc: "https://assets.rohitdhakane.me/wallet.png",
    skills: [
      "React.js",
      "TypeScript",
      "Private Key Management",
      "Web3.js",
      "Client Side Solana",
    ],
    description: `
A **web-based wallet** for managing Solana tokens, allowing users to send, receive, and view their token balances.
- **Secure Wallet Management**: Built a complete Solana wallet with client-side private key generation, mnemonic phrase creation, and secure key storage that never leaves the user's browser

- **Multi-Account Support**: Implemented functionality to create, import, and manage multiple Solana accounts from a single interface with seamless account switching

- **Real-time Blockchain Integration**: Integrated Solana Web3.js SDK for live balance tracking, transaction history, and network interactions across Mainnet, Testnet, and Devnet

- **Transaction Processing**: Developed secure SOL transfer functionality with real-time fee estimation, transaction broadcasting, and status monitoring with comprehensive error handling

- **Modern React Architecture**: Built with React 18, TypeScript, and responsive design principles, featuring a clean UI/UX with dark/light theme support and mobile optimization

- **Production Deployment**: Successfully deployed and hosted on Vercel with optimized build configuration and environment-specific RPC endpoint management
- **GitHub Repository**:Link to the [GitHub repository](https://github.com/rohitdhakane6/web-wallet) for source code and documentation.
    `,
    isExpanded: false,
  },
  {
    id: "futerblink",
    title: "Futerblink",
    period: {
      start: "07.2024",
    },
    link: "https://github.com/rohitdhakane/futerblink",
    skills: ["Next.js", "TailwindCSS", "Node.js", "WebSocket"],
    description: `Futerblink is a cold email automation platform that helps users send, track, and manage personalized outreach campaigns.  
It focuses on deliverability, scheduling, and analytics to improve response rates.  

- 📧 Create and manage cold email campaigns  
- ⚡ Built with Next.js & Node.js for speed and reliability  
- 🔄 Real-time updates and tracking via WebSocket  
- 🎨 Clean, responsive UI with TailwindCSS  
- 📊 Track opens, clicks, and replies with analytics  
- 🗓️ Schedule and automate email sequences  `,
    isExpanded: false,
  },
  {
    id: "formly-live",
    title: "Formly.live",
    period: {
      start: "10.2024",
    },
    link: "https://formly.live/",
    skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS"],
    description: `
Formly.live is a form builder platform that lets users create and share interactive forms like surveys, feedback forms, and polls.  
It focuses on simplicity, real-time responses, and a clean user experience.  

- 📝 Create customizable forms with multiple field types  
- ⚡ Built with Next.js & TypeScript for performance  
- 🗄️ Prisma + PostgreSQL for secure data storage  
- 🎨 Styled with TailwindCSS for responsive design  
- 🔄 Real-time form submissions and response tracking  
- 🌐 Share forms via links and collect responses easily  
`,

    isExpanded: false,
  },
];
