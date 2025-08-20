import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiPython, SiLinux, SiAwsamplify, SiDocker, SiKubernetes, SiJenkins, SiAnsible } from 'react-icons/si';

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

const portfolioData: PortfolioData = {
  name: "Amit Naganath Bichitkar",
  role: "Computer Engineering Student | Aspiring DevOps Engineer",
  bio: "Enthusiastic and quick-learning Computer Engineer passionate about building scalable apps and cloud-native solutions.",
  tagline: "Turning ideas into scalable, serverless, and reliable solutions",
  about: "I am currently pursuing my Bachelor's in Computer Engineering from Trinity College of Engineering and Research, Pune. I have hands-on experience in Android app development, image segmentation, and cloud projects using AWS. I’m also exploring DevOps tools like Docker, Kubernetes, Jenkins, and Ansible.",
  location: "Pune, Maharashtra, India",
  email: "amitbichitkar20@gmail.com",
  phone: "+91 7264094055",
  avatar: "/images/Amit.jpg",

  skills: [
    { name: "Java", icon: SiJavascript, level: 85 },
    { name: "Python", icon: SiPython, level: 70 },
    { name: "Linux", icon: SiLinux, level: 80 },
    { name: "AWS Cloud", icon: SiAwsamplify, level: 75 },
    { name: "Docker", icon: SiDocker, level: 60 },
    { name: "Kubernetes", icon: SiKubernetes, level: 50 },
    { name: "Jenkins CI/CD", icon: SiJenkins, level: 55 },
    { name: "Ansible", icon: SiAnsible, level: 50 },
    { name: "Git", icon: FaGitAlt, level: 80 }
  ],

  projects: [
    {
      id: "project-1",
      title: "Image Segmentation Android App",
      description: "Developed a lightweight, real-time image segmentation app for Android using Java, CNN, and Firebase ML Kit. Enabled on-device processing, integrated Firebase Realtime Database, and object recognition for scalable and reliable performance.",
      image: "/images/projects/segmentation.jpg",
      tags: ["Java", "Android", "CNN", "Firebase"],
      githubUrl: "https://github.com/amitbichitkar",
    },
    {
      id: "project-2",
      title: "S3Track – Serverless File Upload Tracker",
      description: "Built a serverless application using AWS (S3, Lambda, DynamoDB, SNS) to track file uploads in real time. Implemented event-driven architecture with notifications and metadata storage, ensuring scalability and reliability.",
      image: "/images/projects/s3track.jpg",
      tags: ["AWS", "S3", "Lambda", "DynamoDB", "SNS"],
      githubUrl: "https://github.com/amitbichitkar",
    }
  ],

  certifications: [],

  education: [
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Trinity College Of Engineering And Research",
      location: "Pune, Maharashtra",
      period: "2021 - 2025",
      description: "Active member of the cricket team and participated in fests and seminars. Secured 70% in academics."
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Jaywantrao-Sawant Shishak Prasarak Mandal",
      location: "Pune, Maharashtra",
      period: "2018 - 2021",
      description: "Secured 85% in academics."
    }
  ],

  experience: [
    {
      position: "Java Developer Intern",
      company: "OASIS INFOBYTE",
      location: "Pune, Maharashtra",
      period: "2024",
      description: [
        "Delivered high-quality code and completed tasks within deadlines.",
        "Enhanced understanding of object-oriented programming.",
      ]
    }
  ],

  socialLinks: [
    { platform: "GitHub", url: "https://github.com/amitbichitkar", icon: FaGithub },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/amit-bichitkar-170916283/", icon: FaLinkedin },
  ]
};

export default portfolioData;
