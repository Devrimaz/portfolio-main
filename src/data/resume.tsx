import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rimaz Ahamed",
  initials: "A.R",
  url: "https://dillion.io",
  location: "Colombo, Sri Lanka",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Web Developer and Tech Enthusiast.",
  summary:
    "In 2024, I began focusing full-time on improving my skills as a web developer by building real-world projects and participating in online hackathons. I've worked on a range of applications-from booking systems to tools for developers—while actively learning modern frameworks like React, Next.js, and Bootstrap. I’ve also contributed to freelance projects and shared my work on GitHub and Dev.to. Every project is a step toward mastering full-stack development and building tools that solve real problems.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Javascript",
    "C++",
    "TailwindCSS",
    "MongoDB",
    "Figma",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rimazdev@gmail.com",
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
        url: "send2rimaz@outlook.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Port City BPO",
      href: "https://portcitybpo.lk/",
      badges: [],
      location: "On-Site",
      title: "Settlement Officer",
      logoUrl: "/Port-City-BPO-logo.webp",
      start: "May 2025",
      end: "",
      description:
        "Responsible for handling financial settlements, verifying transactions, and ensuring accurate record-keeping. Worked closely with internal teams and external partners to resolve discrepancies and maintain smooth payment processes.",
    },
    {
      company: "Fiverr",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/Fiverr-Logo-jpg.webp",
      start: "January 2023",
      end: "",
      description:
        "Build responsive, user-friendly websites using HTML, CSS, JS, and Bootstrap. Deliver fast, clean, and client-focused web solutions.",
    },
  ],
  education: [
    {
      school: "ESU Uni",
      href: "https://www.esu.lk/",
      degree: "Diploma in Information Technology",
      logoUrl: "/ESU logo.png",
      start: "2025",
      end: "2025",
    },
    {
      school: "ESU Uni",
      href: "https://www.esu.lk/",
      degree: "Higher National Diploma in Software Engineering",
      logoUrl: "/ESU logo.png",
      start: "2024",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "BookMyBus",
      href: "#",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "BookMyBus is a full-stack web application that allows users to search, book, and manage intercity bus tickets. Designed with a user-friendly interface, the platform provides real-time availability of buses, seat selection, and booking confirmation. It also includes an admin panel to manage bus routes, schedules, and bookings efficiently.",
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
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pin.it/3VUnjMWpj",
    },
  ],
  hackathons: [
    {
      title: "Thinkfest Hackathon",
      dates: "November 23rd - 25th, 2024",
      location: "Colombo, Sri lanka",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://esoft.lk/wp-content/themes/esoft_metro_campus/assets/img/logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2025",
      location: "Colombo, Sri lanka",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
  ],
} as const;
