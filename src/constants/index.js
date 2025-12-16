import {
  nitk,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  khoj,
  kosh,
  polkadot_dev_cli,
  hackathon_curation_agent,
  kudos,
  schoolLogo,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlask,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiOracle,
  SiGmail,
  SiGooglesheets,
  SiThirdweb,
  SiIntellijidea,
  SiSpringboot,
  SiSpring
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang, FaXTwitter } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

import finparkImg from "../assets/finparkLogo.png";
import workerImg from "../assets/workersLogo.jpg";
import splitarcImg from "../assets/splitArcxLogo.jpg";
import atmImg from "../assets/ATM.png";
import libraryImg from "../assets/library.png";
import groceryImg from "../assets/grocery.webp";
import jobportalImg from "../assets/jobportal.avif";
import restaurantImg from "../assets/restuarent.webp";

import collegeLogo from "../assets/VFSTR logo.webp";
import southZone from "../assets/southzone.png"

import { RiGeminiFill } from "react-icons/ri";
import { spring } from "framer-motion";

export const resumeLink =
  "https://drive.google.com/file/d/1rZ2k_1-B89h-A5bP65ogeL0wPy43pZXt/view?usp=sharing";
export const repoLink = "https://github.com/Prasanth2580";

export const callToAction = "https://www.linkedin.com/in/prasanth-chatti-85632a264/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Vignan's Foundation for Science, Technology and Research (VFSTR), Guntur",
    degree: "Bachelor of Technology",
    duration: "Oct 2020 - July 2024     CGPA: 8.1/10",
    content1: "Major: Computer Science and Engineering ",
    content2: "Minor: Cyber Security",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Jupiter Junior College, Guntur",
    degree: "",
    duration: "June 2018 - March 2020",
    content1:
      "Completed Intermediate (MPC) with a CGPA of 9.25 and secured 85.6 percentile in JEE Mains.",
  },
  {
  id: "education-3",
  icon: schoolLogo,
  title: "ST. Mary's English Medium High School, Ravipadu",
  degree: "Class X | AP SSC",
  duration: "June 2017 - March 2018",
  content1: "Completed Class X with a CGPA of 9.2.",
}

];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    event: "LeetCode",
    position: "Competitive Programming",
    content1: "Maintained a strong problem-solving profile",
    content2: "High acceptance rate across solved problems",
    content3: "Consistent practice in Data Structures & Algorithms",
  },
  {
    id: "a-2",
    event: "HackerRank Certifications",
    position: "Certified Developer",
    content1: "Java Certification",
    content2: "Python, C, SQL & Problem Solving Certifications",
    content3: "Verified skill proficiency on HackerRank",
  },
  {
    id: "a-3",
    event: "CodeChef",
    position: "1★ Rated Programmer",
    content1: "Achieved 1-star rating on CodeChef",
    content2: "Participated in multiple competitive contests",
    content3: "",
  },
  {
    id: "a-4",
    event: "Vignan Hackathon 2024",
    position: "Participant",
    content1: "Participated in university-level hackathon",
    content2: "Collaborated in a team-based problem-solving environment",
    content3: "",
  },
  {
    id: "a-5",
    event: "Vignan Intra-University Cricket Tournament",
    position: "Winner",
    content1: "Champions of the intra-university cricket tournament",
    content2: "Demonstrated teamwork and leadership skills",
    content3: "",
  },
  {
    id: "a-6",
    event: "Vignan Mahotsav Cricket Tournament",
    position: "Runner Up",
    content1: "Secured runner-up position in Mahotsav cricket event",
    content2: "Represented the department in inter-college matches",
    content3: "",
  },
  {
    id: "a-7",
    event: "South Zone Inter-University Cricket",
    position: "University Representative",
    content1: "Actively represented Vignan University in South Zone cricket",
    content2: "Competed at a higher inter-university level",
    content3: "",
  },
  {
    id: "a-8",
    event: "NPTEL Certifications",
    position: "Certified Learner",
    content1: "Data Analysis and Decision Making – I",
    content2: "Software Testing",
    content3: "Successfully completed NPTEL certification courses",
  },
  {
    id: "a-9",
    event: "Local Cricket Tournament 2025",
    position: "Runner Up",
    content1: "Runner-up in local-level cricket tournament",
    content2: "Demonstrated consistent performance and sportsmanship",
    content3: "",
  },
];


// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
        {
        id: "pl-10",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-11",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-12",
        icon: DiCss3,
        name: "CSS",
      },
      // {
      //   id: "pl-4",
      //   icon: DiRuby,
      //   name: "Ruby",
      // },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      // {
      //   id: "pl-6",
      //   icon: SiTypescript,
      //   name: "TypeScript",
      // },
      // {
      //   id: "pl-7",
      //   icon: SiCplusplus,
      //   name: "C++",
      // },
      // {
      //   id: "pl-8",
      //   icon: FaGolang,
      //   name: "Go",
      // },
      // {
      //   id: "pl-9",
      //   icon: FaRust,
      //   name: "Rust",
      // },
    
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiSpringboot,
        name: "Spring Boot",
      },
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiDjango,
        name: "Django",
      },
      
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiSpring,
        name: "Spring",
      },
      {
        id: "f-6",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "f-7",
        icon: SiArduino,
        name: "Arduino",
      },
     
    ],
  },
  {
  title: "Tools & Platforms",
  items: [
    { id: "t-1", icon: SiOracle, name: "Oracle Cloud (OCI)" }, // Strongest differentiator
    { id: "t-2", icon: SiMysql, name: "MySQL" },
    { id: "t-3", icon: SiGit, name: "Git" },
    { id: "t-4", icon: AiFillGithub, name: "GitHub" },
    { id: "t-5", icon: SiPostman, name: "Postman" },
    { id: "t-6", icon: BiLogoVisualStudio, name: "VS Code" },
    { id: "t-7", icon: SiIntellijidea, name: "IntelliJ IDEA" },
    { id: "t-8", icon: VscAzure, name: "Azure" },
    { id: "t-9", icon: SiNetlify, name: "Netlify" },
    // { id: "t-10", icon: SiVite, name: "ViteJS" },
    // { id: "t-11", icon: AiOutlineGitlab, name: "GitLab" },
  ],
}
,
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Citridot",
    logo: oracle, // replace with your Citridot logo import
    link: "", // add project/live link if available
    positions: [
      {
        title: "Worker Supply Management System",
        duration: "Nov 2024 - Jan 2025",
        content: [
          {
            text: "Built a full-stack workforce management system supporting Admin and Worker Distributor roles with secure role-based access.",
            link: "",
          },
          {
            text: "Developed RESTful backend APIs using Java and Spring Boot for worker onboarding, assignments, approvals, and activity tracking.",
            link: "",
          },
          {
            text: "Implemented authentication and authorization using Spring Security and JWT.",
            link: "",
          },
          {
            text: "Designed scalable NoSQL data models using AWS DynamoDB for workers, request logs, and audit history.",
            link: "",
          },
          {
            text: "Integrated AWS S3 for storing worker-related assets and documents.",
            link: "",
          },
          {
            text: "Optimized API performance using pagination, indexing strategies, and efficient read/write patterns.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Soulax",
    logo: averlon, // replace with your Soulax logo import
    link: "", // add project/live link if available
    positions: [
      {
        title: "FinPark – Reservation & Parking Management System",
        duration: "Jan 2025 - Oct 2025",
        content: [
          {
            text: "Contributed to backend API development for a parking reservation and slot management system using Java and Spring Boot.",
            link: "",
          },
          {
            text: "Designed and optimized MySQL database schemas to support reservation workflows and efficient data retrieval.",
            link: "",
          },
          {
            text: "Monitored application logs and debugged production and lower-environment issues.",
            link: "",
          },
          {
            text: "Analyzed and optimized SQL queries to improve backend performance and stability.",
            link: "",
          },
          {
            text: "Integrated AWS S3 for asset storage and AWS SNS for notification workflows.",
            link: "",
          },
          {
            text: "Created and executed backend test cases, validated results, and documented outcomes to ensure system reliability.",
            link: "",
          },
        ],
      },
    ],
  },
];


// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "FinPark – Parking & Reservation Management Platform",
    github: "",
    link: "https://www.finpark.io/",
    image: finparkImg,
    content:
      "Backend development for a large-scale parking and reservation management system. Built and optimized APIs for reservations, invoices, statements of income, notifications, scheduled jobs, and performance-critical dashboards using Java and Spring Boot.",
    stack: [
      { id: "proj1-icon-1", icon: DiJava, name: "Java" },
      { id: "proj1-icon-2", icon: SiSpringboot, name: "Spring Boot" },
      { id: "proj1-icon-3", icon: SiMysql, name: "MySQL" },
      { id: "proj1-icon-4", icon: SiPostman, name: "REST APIs" },
    ],
  },

  {
    id: "project-2",
    title: "Worker Supply Management System",
    github: "",
    link: "",
    image: workerImg,
    content:
      "Role-based workforce management system where Admins manage workers and Work Distributors request workers based on skills and quantity. Includes secure authentication and scalable backend architecture.",
    stack: [
      { id: "proj2-icon-1", icon: DiJava, name: "Java" },
      { id: "proj2-icon-2", icon: SiSpringboot, name: "Spring Boot" },
      { id: "proj2-icon-3", icon: SiReact, name: "React.js" },
      { id: "proj2-icon-4", icon: SiPostman, name: "JWT Authentication" },
    ],
  },

  {
    id: "project-3",
    title: "SplitArcX – Expense Splitting Application",
    github: "",
    link: "",
    image: splitarcImg,
    content:
      "A Splitwise-like expense management application that allows users to create groups, track shared expenses, calculate balances, and simplify settlements.",
    stack: [
      { id: "proj3-icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "proj3-icon-2", icon: SiPostman, name: "REST APIs" },
      { id: "proj3-icon-3", icon: SiMysql, name: "Database Design" },
    ],
  },

  {
    id: "project-4",
    title: "Simple ATM Application",
    github: "",
    link: "",
    image: atmImg,
    content:
      "Console-based ATM application demonstrating strong Object-Oriented Programming concepts including encapsulation, inheritance, abstraction, and exception handling.",
    stack: [
      { id: "proj4-icon-1", icon: DiJava, name: "Java" },
      { id: "proj4-icon-2", icon: SiSpring, name: "OOP Concepts" },
    ],
  },

  {
    id: "project-5",
    title: "Library Management System",
    github: "",
    link: "https://www.codewithfaraz.com/content/485/school-library-management-system-using-html-css-and-javascript",
    image: libraryImg,
    content:
      "Web-based library management system to manage books, users, and issue/return operations with a responsive interface.",
    stack: [
      { id: "proj5-icon-1", icon: AiFillHtml5, name: "HTML" },
      { id: "proj5-icon-2", icon: DiCss3, name: "CSS" },
      { id: "proj5-icon-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },

  {
    id: "project-6",
    title: "Grocery Website",
    github: "",
    link: "https://www.codewithfaraz.com/content/478/grocery-website-template-using-html-tailwind-css-and-javascript",
    image: groceryImg,
    content:
      "Responsive grocery shopping website featuring product listings and modern UI using Tailwind CSS.",
    stack: [
      { id: "proj6-icon-1", icon: AiFillHtml5, name: "HTML" },
      { id: "proj6-icon-2", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "proj6-icon-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },

  {
    id: "project-7",
    title: "Responsive Job Portal Website",
    github: "",
    link: "https://www.codewithfaraz.com/content/542/responsive-job-portal-website-template-using-html-css-and-javascript",
    image: jobportalImg,
    content:
      "Responsive job portal UI with job listings, search functionality, and employer/job-seeker sections.",
    stack: [
      { id: "proj7-icon-1", icon: AiFillHtml5, name: "HTML" },
      { id: "proj7-icon-2", icon: DiCss3, name: "CSS" },
      { id: "proj7-icon-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },

  {
    id: "project-8",
    title: "Restaurant Dashboard",
    github: "",
    link: "https://www.codewithfaraz.com/content/479/create-restaurant-dashboard-using-html-tailwindcss-and-javascript",
    image: restaurantImg,
    content:
      "Admin dashboard for restaurant management including order tracking, revenue insights, and table status.",
    stack: [
      { id: "proj8-icon-1", icon: AiFillHtml5, name: "HTML" },
      { id: "proj8-icon-2", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "proj8-icon-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },
];


// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Vignan University",
    title: "University Cricket Team Member",
    duration: "2021 – 2024",
    content: [
      {
        text: "Represented Vignan University in inter-university and South Zone cricket tournaments, competing at a high level of collegiate sports.",
        link: "",
      },
      {
        text: "Demonstrated teamwork, discipline, leadership, and performance under pressure through competitive sports.",
        link: "",
      },
    ],
    logo: collegeLogo,
  },
  {
    id: 2,
    organisation: "South Zone Inter-University Cricket",
    title: "University Representative",
    duration: "2022 – 2023",
    content: [
      {
        text: "Selected to represent the university at South Zone Cricket Championships (twice), competing against top universities.",
        link: "",
      },
    ],
    logo: southZone,
  },
  {
    id: 3,
    organisation: "Vignan University",
    title: "Merit Scholarship Awardee",
    duration: "Academic Excellence",
    content: [
      {
        text: "Awarded a 50% Merit Scholarship in recognition of consistent academic performance and overall excellence.",
        link: "",
      },
    ],
    logo: nitk,
  },
  {
    id: 4,
    organisation: "Competitive Programming",
    title: "Problem Solving & Coding Practice",
    duration: "Ongoing",
    content: [
      {
        text: "Actively practiced data structures and algorithms on platforms like CodeChef and HackerRank to strengthen problem-solving skills.",
        link: "https://www.codechef.com/users/prasanth2468",
      },
      {
        text: "Earned multiple certifications on HackerRank in Java, Python, SQL, and Problem Solving.",
        link: "https://www.hackerrank.com/profile/prasanthchatti51",
      },
    ],
    logo: placeicon,
  },
  {
    id: 5,
    organisation: "Personal Projects & Learning",
    title: "Backend & System Design Practice",
    duration: "Ongoing",
    content: [
      {
        text: "Built and maintained multiple backend-focused personal projects to improve real-world development, testing, and debugging skills.",
        link: "",
      },
      {
        text: "Focused on clean API design, database optimization, authentication flows, and production-ready coding practices.",
        link: "",
      },
    ],
    logo: placeicon,
  },
];


// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/prasanth-chatti-85632a264/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Prasanth2580",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:prasanthchatti560@gmail.com",
  },
  // {
  //   id: "social-media-4",
  //   icon: AiOutlineTwitter,
  //   link: "https://www.twitter.com/mittalparth_",
  // },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/prasanth_chatti/?hl=en",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Prasanth Chatti",
  githubUsername: "Prasanth2580",
  tagLine:
    "Backend Developer | Java & Spring Boot | Building Real-World Systems | Cricket Champion 🏏 | VFSTR'24 ",
  intro:
    "Software Developer from India who is either busy improving his craft or pondering over the next big idea.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
