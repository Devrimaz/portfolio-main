import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rimaz Ahamed",
  initials: "DV",
  url: "https://rimaz.me",
  location: "Colombo, Sri Lanka",
  cvUrl: "/Rimaz_Ahamed_CV.pdf",
  locationLink: "https://www.google.com/maps/place/Colombo",
  description:
    "From coding to creating — I build things to empower people and love sharing ideas. Always active and learning.",
  summary:
    "In 2025, I shifted my focus from working as a software engineering student to fully exploring my passion for building digital solutions and helping people through tech. Before that, I completed ICT studies at ESOFT and started learning web development, Python, and cybersecurity on my own. I’ve also created various personal projects like to-do apps, expense trackers, and portfolio websites to sharpen my skills. I enjoy sharing knowledge online, connecting with others, and constantly learning new trends in tech.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "TailwindCSS",
    "Postgres",
    "Docker",
    "JavaScript", 
    "Java",
    "C++",
    "MongoDB",
    "jQuery",
    "Bootstrap",
    "Django",
    "Flask",
    "SQL",
    "Git",
    "GitHub",
  ],
  currentlyLearning: [
    "React Native",
    "AWS",
    "TypeScript",
    "Node.js",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "send2rimaz@outlook.com",
    tel: "+94702465680",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Devrimaz",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rimazraheem/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rimazonX",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:send2rimaz@outlook.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Fiverr",
      href: "https://www.fiverr.com/",
      badges: [],
      location: "Remote",
      title: "Freelance Web Developer",
      logoUrl: "/Fiverr-Logo-jpg.webp",
      start: "May 2024",
      end: null,
      description:
        "Design and develop responsive, user-friendly websites for global clients, delivering custom solutions that enhance brand presence and improve user experience.",
    },

    {
      company: "Port City BPO",
      badges: [],
      href: "https://portcitybpo.lk/",
      location: "On-Site, Colombo",
      title: "Settlement Officer",
      logoUrl: "/Port-City-BPO-logo.webp",
      start: "May 2025",
      end: null,
      description:
        "As a Settlement Officer, I ensure accurate and timely processing of financial transactions, resolve settlement issues, and maintain strong client and partner relationships to support smooth operational workflows.",
    },
  ],
  education: [
    {
      school: "Esoft Metro Campus",
      href: "https://esoft.lk/",
      degree: "Diploma in Information Technology",
      logoUrl: "/esoft logo.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "ESU UNI",
      href: "https://www.esu.lk/",
      degree: "Higher National Diploma in Software Engineering (HND)",
      logoUrl: "/ESU logo.png",
      start: "2025",
      end: null,
    },
  ],
  certificates: [
    {
      name: "Web Design for Beginners",
      issuer: "Center for open & Distance Learning (CODL) University of Moratuwa, Sri Lanka",
      date: "2025",
      url: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
      logoUrl: "/logo_codl.png",
      description: "Complete web development course covering HTML, CSS, JavaScript, and modern frameworks."
    }, 
    {
      name: "User Experience Design - Learn UI UX App Design with Figma",
      issuer: "Udemy",
      date: "2025", 
      url: "https://www.udemy.com/",
      logoUrl: "udemy logo.jpg",
      description: "Master user experience design and learn to create stunning, user-friendly app interfaces using Figma. This course covers essential UI/UX principles, practical design techniques, and hands-on projects to help you build professional app designs from scratch"
    },
    {
      name: "Web Development",
      issuer: "University of Leeds",
      date: "2025",
      url: "https://freecodecamp.org/certification/example",
      logoUrl: "/leeds-logo.jpeg", 
      description: "This online course explored the different roles within a web development team and the skills needed. Learners considered key web development technologies, common web languages and their applications, data protection and intellectual property"
    }
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devrimaz/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Thinkfest Hackathon",
      dates: "April 23rd, 2025",
      location: "Bambalapitiya, Colombo",
      description:
        "Participated in Thinkfest Hackathon, collaborating with a team to design and build an innovative tech solution within a short time. Gained hands-on experience in rapid development, teamwork, and pitching ideas.",
      image:
        "/ESU logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackaDev",
      dates: "May 20th - 21st, 2025",
      location: "Colombo, Sri Lanka",
      description:
        "A national social innovation challenge and hackathon empowering youth to develop solutions for community issues.",
      image:
        "/HackaDev.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [],
    },
  ],
} as const;
