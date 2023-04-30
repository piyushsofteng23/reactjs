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
    company_name: "Freelancer",
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
    name: "Netflix Clone",
    description:
      "The Netflix clone project is a web application that emulates the functionality of the popular streaming platform, Netflix. It allows users to browse, search, and view movies and TV shows, and also includes features such as user authentication and responsive design for different screen sizes.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Prototype",
        color: "green-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food App UI",
    description:
      "A food app UI would typically include a landing screen where users can browse through various food categories and explore popular food items. The app may also feature a search bar to help users find specific dishes or cuisines.From quick and easy weeknight dinners to elaborate holiday feasts!",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Prototype",
        color: "green-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: foodapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "App UI",
    description:
      "Discover delicious meals and recipes with ease on our food app! Our user-friendly interface provides you with a personalized experience, allowing you to search, filter, and save your favorite meals. From quick and easy weeknight dinners to elaborate holiday feasts! Visit the project by the link mentioned",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Prototype",
        color: "green-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: food2app,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
