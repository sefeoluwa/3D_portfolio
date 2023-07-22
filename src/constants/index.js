import {
   creator,
    web,
    javascript,
    html,
    css,
    graph,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    clone, 
    library,
    signup,
    sketch,
    star,
    figma,
    threejs,
    google,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "SEO Specialist",
      icon: google,
    }, 
    {
      title: "Growth Marketer",
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
        {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "SEO Specialist",
      company_name: "PersonaRise",
      icon: google,
      iconBg: "#383E56",
      date: "April 2022 - July 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Growth Marketer",
      company_name: "PersonaRise",
      icon: graph,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "MedRate",
      icon: star,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },    
  ];
  
  const projects = [
    {
      name: "MetalVerse",
      description:
        "A modern landing page with registration forms validated with javascript. It contains a sign-up page, and a ssign in page",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "html5",
          color: "pink-text-gradient",
        },
      ],
      image: signup,
      source_code_link: "https://github.com/sefeoluwa/sign-up-form",
    },
    {
      name: "Instagram Clone",
      description:
        "Instagram profile page web application clone built with ReactJS. User can add new images to their profile, chnage bio, and profile picture. Page data saves with indexDB.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "green-text-gradient",
        },
        {
          name: "jsx",
          color: "pink-text-gradient",
        },
      ],
      image: clone,
      source_code_link: "https://github.com/sefeoluwa/insta-clone",
    },
    {
      name: "Library",
      description:
        "A mobile responsive book library built with javascript. User can fill a form to upload details of a book they're reading and it gets rendered to the library",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "html5",
          color: "pink-text-gradient",
        },
      ],
      image: library,
      source_code_link: "https://github.com/sefeoluwa/library",
    },
    {
      name: "Etch-a-Sketch",
      description:
        "A sketchpad built with vanilla JavaScript. User can choose colors, change pad size, and draw on pad with mouse or touch.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: sketch,
      source_code_link: "https://github.com/sefeoluwa/etch-a-sketch",
    },
  ];
  
  export { services, technologies, experiences, projects };
  