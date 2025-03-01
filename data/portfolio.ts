import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export interface Skill {
  name: string;
  icon: IconType;
  level: number; // 1-100
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  experience: Experience[];
  socialLinks: SocialLink[];
}

// Replace with your personal information
const portfolioData: PortfolioData = {
  name: "John Doe",
  role: "Full Stack Developer",
  bio: "Passionate developer with expertise in building modern web applications",
  tagline: "Crafting digital experiences that make a difference",
  about: "I'm a full stack developer with 5+ years of experience building web applications. I specialize in React, Node.js, and modern JavaScript frameworks. I'm passionate about creating clean, efficient, and user-friendly applications that solve real-world problems.",
  location: "New York, NY",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  avatar: "/images/avatar.jpg",
  
  skills: [
    { name: "React", icon: FaReact, level: 90 },
    { name: "TypeScript", icon: SiTypescript, level: 85 },
    { name: "JavaScript", icon: SiJavascript, level: 95 },
    { name: "Node.js", icon: FaNodeJs, level: 80 },
    { name: "Next.js", icon: SiNextdotjs, level: 85 },
    { name: "TailwindCSS", icon: SiTailwindcss, level: 90 },
    { name: "Git", icon: FaGitAlt, level: 85 },
    { name: "Figma", icon: FaFigma, level: 75 },
  ],
  
  projects: [
    {
      id: "project-1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, and payment processing.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/johndoe/ecommerce",
      liveUrl: "https://ecommerce-demo.example.com"
    },
    {
      id: "project-2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
      image: "/images/projects/taskmanager.jpg",
      tags: ["React", "Firebase", "TailwindCSS"],
      githubUrl: "https://github.com/johndoe/taskmanager",
      liveUrl: "https://taskmanager-demo.example.com"
    },
    {
      id: "project-3",
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations using the OpenWeather API.",
      image: "/images/projects/weather.jpg",
      tags: ["JavaScript", "API", "CSS"],
      githubUrl: "https://github.com/johndoe/weather",
      liveUrl: "https://weather-demo.example.com"
    }
  ],
  
  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "https://www.example.com/cert/aws"
    },
    {
      id: "cert-2",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      url: "https://www.example.com/cert/meta"
    },
    {
      id: "cert-3",
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "2021",
      url: "https://www.example.com/cert/google"
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "New York, NY",
      period: "2015 - 2019",
      description: "Graduated with honors. Specialized in software engineering and web development."
    }
  ],
  
  experience: [
    {
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "New York, NY",
      period: "2021 - Present",
      description: [
        "Lead a team of 5 developers in building and maintaining multiple web applications",
        "Implemented CI/CD pipelines that reduced deployment time by 40%",
        "Migrated legacy applications to modern React and TypeScript architecture"
      ]
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions LLC",
      location: "Boston, MA",
      period: "2019 - 2021",
      description: [
        "Developed and maintained multiple client websites and web applications",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with designers and back-end developers to integrate user-facing elements"
      ]
    }
  ],
  
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/johndoe",
      icon: FaGithub
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: FaLinkedin
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: FaTwitter
    }
  ]
};

export default portfolioData;