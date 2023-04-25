import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  freelancer,
  supersapiens,
  foodapp,
  food2app,
  project3,
  
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI Designer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "App Designer",
    icon: backend,
  },
  {
    title: "Product Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "UX/UI Designer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "March 2020 - Present",
    points: [
      "Designing visually appealing and user-friendly interfaces for web and mobile applications",
      "Creating wireframes, prototypes, and high-fidelity mockups to convey design concepts",
      "Delivering projects on-time and on-budget, ensuring a seamless and stress-free experience for clients.",
      "Offering flexible and affordable pricing models to accommodate a variety of budgetary needs",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Tesla",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Jan 2021 - present",
    points: [
      "Custom website design that aligns with your brand's visual identity and business goals",
      "Responsive design that ensures your website looks great and functions seamlessly across all devices",
      "User experience design that considers user needs, behaviors, and interactions to create an intuitive and engaging experience for visitors",
      "Website redesign services that refresh and modernize your existing website, improving its functionality and aesthetics",
    ],
  },
  {
    title: "Software Designer Intern",
    company_name: "Interpe",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI Designer Intern",
    company_name: "SuperSapiens",
    icon: supersapiens,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Designing visually appealing and user-friendly interfaces for web and mobile applications",
      "Creating wireframes, prototypes, and high-fidelity mockups to convey design concepts",
      "Delivering projects on-time and on-budget, ensuring a seamless and stress-free experience for clients.",
      "Offering flexible and affordable pricing models to accommodate a variety of budgetary needs",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "I recently had the pleasure of working with Piyush on the UI design of my food app, and I was so happier with the results.And well, apid an bonus amount",
    name: "Luis Velez",
    designation: "client",
    company: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I wanted to take a moment to thank you for the outstanding work you have done for me.Thanks Piyush for dilvering the project on time!",
    name: "Rohan",
    designation: "Student",
    company: "pccoe",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I wanted to take a moment to express my gratitude for the exceptional work you have done on our app development project. Thanks Piyush!",
    name: "Sukhada",
    designation: "Student",
    company: "PCCOE",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I wanted to take a moment to express my gratitude for the exceptional work you have done on our  Ui Design Proto project. Thanks Piyush!",
    name: "Anirban Goswami",
    designation: "CEO",
    company: "intemize",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
