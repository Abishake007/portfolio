import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abishake",
  lastName: "A",
  name: `Abishake A`,
  role: "Full Stack Developer",
  avatar: "/avatar.png",
  email: "abishakearunagirinathan16@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Tamil"],
};

// ================= NEWSLETTER (Disabled for job portfolio) =================
const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <> </>,
};

// ================= SOCIAL LINKS =================
const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Abishake007",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abishake-arunagiri/",
    essential: true,
  },
  {
    name: "LeetCode",
    icon: "leetcode",
    link: "https://leetcode.com/u/Abishake007/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "/contact",
    essential: true,
  },
];

// ================= HOME =================
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Java Full Stack Developer`,
  description: `Java Full Stack Developer skilled in Spring Boot, React, Angular, and REST APIs.`,
  headline: <>Java Full Stack Developer building scalable web applications</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      I'm Abishake, a final-year Computer Science student specializing in 
      full-stack development with Java, Spring Boot, React, and Angular.
      <br /><br />
      I build secure backend systems, design RESTful APIs, and develop 
      responsive frontend applications with real-world project experience 
      in e-commerce and digital banking systems.
    </>
  ),
};

// ================= ABOUT =================
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Full-Stack Developer | Java | Spring Boot | React | Angular`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Professional Summary",
    description: (
      <>
        I am a final-year Computer Science and Engineering student specializing in Full-Stack
        Web Development. I have hands-on experience building scalable web applications using
        React, Angular, Java, and Spring Boot. I focus on designing clean architectures,
        developing RESTful APIs, and integrating databases like MySQL and MongoDB.
        <br /><br />
        I am actively seeking internship or entry-level opportunities where I can contribute
        to real-world projects, strengthen my backend and frontend expertise, and grow in a
        collaborative development environment.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Paavai College of Engineering",
        description: <>B.E – Computer Science and Engineering (CGPA: 7.6 / 10)</>,
      },
      {
        name: "Findlay Higher Secondary School",
        description: <>Higher Secondary – Computer Science & Mathematics (75%)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming & Core Concepts",
        description: <>Strong foundation in OOP, Data Structures, and problem solving.</>,
        tags: [
          { name: "Java", icon: "java" },
          { name: "JavaScript", icon: "javascript" },
          { name: "SQL", icon: "code" },
          { name: "DSA", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: <>Building responsive, component-based user interfaces.</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Angular", icon: "angular" },
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "Bootstrap", icon: "css" },
        ],
        images: [],
      },
      {
        title: "Backend Development",
        description: <>Designing REST APIs and implementing secure backend services.</>,
        tags: [
          { name: "Spring Boot", icon: "java" },
          { name: "Express.js", icon: "nodejs" },
          { name: "REST APIs", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Databases & Tools",
        description: <>Working with relational and NoSQL databases and development tools.</>,
        tags: [
          { name: "MySQL", icon: "database" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Git", icon: "github" },
          { name: "Postman", icon: "code" },
          { name: "Firebase", icon: "cloud" },
        ],
        images: [],
      },
    ],
  },
};


// ================= WORK =================
const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Full-stack and software development projects by ${person.name}`,
};

// ================= GALLERY (Disabled) =================
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "",
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, work, gallery };