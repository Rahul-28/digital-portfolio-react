const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience"
    },
    {
        id: "contact",
        title: "Contact",
    }
]

const technologyImages = [
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
    alt: 'Angular',
  },
  { link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg', 
    alt: 'CSS' 
  },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    alt: 'Express',
  },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    alt: 'Git',
  },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    alt: 'HTML',
  },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg',
    alt: 'Ionic',
  },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg',
    alt: 'Insomnia',
  },
  { link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', 
    alt: 'Java' 
  },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    alt: 'Javascript',
  },
  // { link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg', alt: 'Jest' },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg',
    alt: 'Mongo DB',
  },
  { link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg', 
    alt: 'Node' 
  },
  { link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    alt: 'React'
  },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    alt: 'Tailwind',
  },
  {
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    alt: 'Typescript',
  },
];

const experiences = [
  {
    title: 'Junior Frontend Developer',
    company: 'Nowri Technologies',
    duration: 'Jan 2024 - July 2024',
    locationType: 'Remote',
  },
  {
    title: 'Open Source Contributor',
    company: 'Ionic',
    duration: 'March 2024',
    locationType: 'Remote',
  },  
  {
    title: 'Assistant System Engineer',
    company: 'TATA Consultancy Services',
    duration: 'May 2025 - Present',
    locationType: 'Onsite',
  },
]
const gmail = "rahulrajeshrr365@gmail.com"

const socials = [
{
    name: "Github",
    icon: "/images/github.svg",
    url: "https://github.com/Rahul-28",
    className: 'w-10 h-10 hover:scale-110 transition-transform duration-300 ease-in-out'
},
{
    name: "Gmail",
    icon: "/images/gmail.svg",
    url: `mailto:${gmail}`,
    className: 'w-10 h-10 hover:scale-110 transition-transform duration-300 ease-in-out'
},
{
    name: "Linkedin",
    icon: "/images/linkedin.svg",
    url: "https://www.linkedin.com/in/dev-rahulrajesh/",
    className: 'w-15 h-15 hover:scale-110 transition-transform duration-300 ease-in-out'
},
];


export {
    navLinks,
    technologyImages,
    experiences,
    socials,
    gmail,
}