import checkoutImg from "./assests/images/projects/checkout-img.png";
import krisImg from "./assests/images/projects/kris-img.png";
import kracadaImg from "./assests/images/projects/kracada-img.png";
import edvesImg from "./assests/images/projects/edves-img.jpg";

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pureheart's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pureheart Gharoro Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Pureheart Gharoro",
  logo_name: "PureheartGharoro",
  nickname: "Senior Software Engineer",
  subTitle:
    "I am a Senior Software Engineer based in Lagos, Nigeria with seven (7) years of experience in software development. My industry experience cuts across FinTech, EdTech, Identity Management and HRTech. I have a proven track record of developing secure and scalable software solutions and leading cross-functional teams. My areas of expertise include JavaScript, TypeScript, React, Angular, Node.js, and Nest.Js.",
  resumeLink:
    "https://drive.google.com/file/d/146zieNq9wNAg6iN6-wMKiuQ-DBY9f4W0/view?usp=sharing",
  githubProfile: "https://github.com/Gharoro",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Gharoro",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gharoropureheart/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:gharoropureheart@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/08144618246",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#128C7E",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Design, develop, and maintain scalable and secure full-stack web applications using modern technologies such as JavaScript, TypeScript, React, Angular, Node.js, and Nest.Js.",
        "⚡ Lead and mentor cross-functional teams, providing technical guidance, conducting code reviews, and ensuring adherence to best practices and coding standards.",
        "⚡ Collaborate with stakeholders to gather requirements, define project scopes, and deliver high-quality software solutions that meet business objectives and user needs.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#2C8EBB",
            color: "#02569B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Nest.Js",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Java/Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Stutern Graduate Accelerator Program (Bootcamp) - Lagos, Nigeria.",
      subtitle: "Full Stack Software Engineering - MERN Stack",
      logo_path: "",
      alt_name: "Stutern",
      duration: "Nov 2019 - Aug 2020",
      descriptions: [
        "⚡ Project based learning on frontend development with React.",
        "⚡ Project based learning on backend development with Node.Js and MongoDB.",
      ],
      website_link: "https://www.stutern.com/",
    },
    {
      title: "The Federal University of Technology, Akure - Ondo, Nigeria",
      subtitle: "B.Tech. Industrial Mathematics",
      logo_path: "",
      alt_name: "FUTA",
      duration: "Feb 2013 - Oct 2018",
      descriptions: [
        "⚡ Course work in Basic programmiing with QBasic and Fortran",
        "⚡ Course work in functional and object oriented programming with Python.",
        "⚡ Graduated with a Second Class Upper (Honours) (2.1).",
      ],
      website_link: "https://futa.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ALC 3.1 Mobile Web Specialist",
      subtitle: "- Google, Andela & Pluralsight",
      logo_path: "alc.png",
      certificate_link:
        "https://drive.google.com/file/d/1CiorVsHUswjnsb_3wSKF1CLDY3rFW19k/view",
      alt_name: "ALC 3.1",
      color_code: "#8C151599",
    },
    {
      title: "Javascript Algorithms and Data Structures",
      subtitle: "- Freecodecamp",
      logo_path: "fccjs.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fccf93da63e-5895-44b9-85c9-b8be0e6efaf5/javascript-algorithms-and-data-structures",
      alt_name: "Javascript",
      color_code: "#00000099",
    },
    {
      title: "Building Restful APIs in Laravel",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedinlearning.png",
      certificate_link:
        "https://drive.google.com/file/d/1vSfR5RTMNHWn12fFvuUQGMA90NSSSTbb/view",
      alt_name: "Linkedin Learning",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "A seasoned Software Developer and Team Lead with a successful track record in delivering software solutions for various industries and mentoring junior developers. Expertise spans FinTech, Identity Management Enterprise Solutions, EdTech and HrTech.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer/Engineering Manager",
          company: "Seamfix",
          company_url: "https://seamfix.com/",
          logo_path: "",
          duration: "July 2024 - Present",
          location: "Lagos, Nigeria",
          description:
            "Working on identity management software solutions for medium to large scale organisations in banking, telecommunications, government agencies etc. Lead software engineer and defacto engineering manager. Technologies: Typescript, Angular, Ionic, Nest.js, Java and Spring Boot.",
          color: "#000000",
        },
        {
          title: "Frontend Engineer",
          company: "Nomba Financial Services",
          company_url: "https://nomba.com/",
          logo_path: "",
          duration: "April 2022 - June 2024",
          location: "Lagos, Nigeria",
          description:
            "Worked in the Payment Processing Team as lead Frontend Engineer. Built Nomba Checkout, an online payment solution for accepting payments via bank transfer, card, ussd or Nomba QR code. Technologies: Typescript, React.js, Styled Components, Node.js",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer/Team Lead",
          company: "Kimberly Ryan Limited",
          company_url: "https://kimberly-ryan.com/",
          logo_path: "",
          duration: "January 2021 - March 2022",
          location: "Lagos, Nigeria",
          description:
            "Hired as the first employee in the tech team, I was responsible for setting up the company's tech team, building software tools to improve internal operations. Also responsible for launching key software products within the organisation. Technologies: Javascript, React, Angular, Node.js, Laravel.",
          color: "#9b1578",
        },
        {
          title: "Frontend Engineer",
          company: "Edves",
          company_url: "https://www.edves.net/",
          logo_path: "",
          duration: "August 2021 - March 2022",
          location: "Lagos, Nigeria",
          description:
            "Designed and coded Edves Learning Management System used by thousands of users in Nigeria and other African countries including Kenya and Ghana. Worked specifically on Accounting and Inventory Modules.",
          color: "#ee3c26",
        },
        {
          title: "Full Stack Developer",
          company: "Talenture.",
          company_url: "https://talenture.co.uk/",
          logo_path: "",
          duration: "March 2020 - December 2020",
          location: "Lagos, Nigeria",
          description:
            "Collaborated with team members to conceptualize, design, and develop a cutting-edge HR solutions. Successfully engineered a robust video technology recruitment solution tailored for hiring managers. Technoloies: Typescript, React, Node.js, Ruby on Rails.",
          color: "#fc1f20",
        },
        {
          title: "Web Developer",
          company: "Complete Computers and Technologies Limited",
          company_url: "https://www.cctechlimited.com/",
          logo_path: "",
          duration: "June 2017 - February 2020",
          location: "Remote, Nigeria",
          description:
            "Worked with clients to understand their project requirements and functionalities.  Built web applications using HTML, CSS, Javascript and React.Js.  Developed backend applications using PHP, Laravel and MySQL. Technologies: Javascript, React.js, PHP, Laravel.",
          color: "#fc1f20",
        },
      ],
    },
  ],
  volunteers: [
    {
      title: "Volunteer Experience",
      experiences: [
        {
          title: "Volunteer Mentor - Mobile Web Specialist ALC 4.0",
          company: "Andela",
          company_url: "https://andela.com/",
          logo_path: "",
          duration: "June 2020 - December 2020",
          location: "Lagos, Nigeria",
          description:
            "Learning Community Volunteer Mentor where I supported and provided guidance to learners that were currently enrolled in the ALC program (Mobile Web Specialist Track) mentoring and unblocking any issue they may be facing with their learning in collaboration with Google and Pluralsight. My role is to mentor learners in the Mobile Web Specialist track, assist them in their learning, document their engagement and review their code base to provide helpful feedback on software development best practices.",
          color: "#4285F4",
        },
        {
          title: "Technical Coach",
          company: "Django Girls",
          company_url: "https://djangogirls.org/en/delta1/",
          logo_path: "",
          duration: "October 2017 - October 2017",
          location: "Delta, Nigeria",
          description:
            "Acted as a Technical Coach introducing and training learners on programming with Python and Django web framework. Introduced learners to the command line and build a basic command line application with Python.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "I've worked on various projects across different industries.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  // data: [
  //   {
  //     id: "neuro-symbolic-sudoku-solver",
  //     name: "Neuro-Symbolic Sudoku Solver",
  //     createdAt: "2023-07-02T00:00:00Z",
  //     description: "Paper published in KDD KiML 2023",
  //     url: "https://arxiv.org/abs/2307.00653",
  //   },
  //   {
  //     id: "mdp-diffusion",
  //     name: "MDP-Diffusion",
  //     createdAt: "2023-09-19T00:00:00Z",
  //     description: "Blog published in Paperspace",
  //     url: "https://blog.paperspace.com/mdp-diffusion/",
  //   },
  //   {
  //     id: "consistency-models",
  //     name: "Consistency Models",
  //     createdAt: "2023-10-12T00:00:00Z",
  //     description: "Blog published in Paperspace",
  //     url: "https://blog.paperspace.com/consistency-models/",
  //   },
  // ],
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "I am available via mail, phone or Whatsapp. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

const githubData = {
  total: {
    lastYear: 1070,
  },
  contributions: [
    {
      date: "2023-07-16",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-17",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-18",
      count: 4,
      level: 1,
    },
    {
      date: "2023-07-19",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-20",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-21",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-22",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-23",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-24",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-25",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-26",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-27",
      count: 2,
      level: 1,
    },
    {
      date: "2023-07-28",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-29",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-30",
      count: 0,
      level: 0,
    },
    {
      date: "2023-07-31",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-01",
      count: 6,
      level: 2,
    },
    {
      date: "2023-08-02",
      count: 9,
      level: 2,
    },
    {
      date: "2023-08-03",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-04",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-05",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-06",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-07",
      count: 2,
      level: 1,
    },
    {
      date: "2023-08-08",
      count: 5,
      level: 2,
    },
    {
      date: "2023-08-09",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-10",
      count: 9,
      level: 2,
    },
    {
      date: "2023-08-11",
      count: 2,
      level: 1,
    },
    {
      date: "2023-08-12",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-13",
      count: 7,
      level: 2,
    },
    {
      date: "2023-08-14",
      count: 13,
      level: 3,
    },
    {
      date: "2023-08-15",
      count: 6,
      level: 2,
    },
    {
      date: "2023-08-16",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-17",
      count: 0,
      level: 0,
    },
    {
      date: "2023-08-18",
      count: 2,
      level: 1,
    },
    {
      date: "2023-08-19",
      count: 3,
      level: 1,
    },
    {
      date: "2023-08-20",
      count: 2,
      level: 1,
    },
    {
      date: "2023-08-21",
      count: 3,
      level: 1,
    },
    {
      date: "2023-08-22",
      count: 7,
      level: 2,
    },
    {
      date: "2023-08-23",
      count: 14,
      level: 4,
    },
    {
      date: "2023-08-24",
      count: 1,
      level: 1,
    },
    {
      date: "2023-08-25",
      count: 2,
      level: 1,
    },
    {
      date: "2023-08-26",
      count: 1,
      level: 1,
    },
    {
      date: "2023-08-27",
      count: 1,
      level: 1,
    },
    {
      date: "2023-08-28",
      count: 8,
      level: 2,
    },
    {
      date: "2023-08-29",
      count: 4,
      level: 1,
    },
    {
      date: "2023-08-30",
      count: 4,
      level: 1,
    },
    {
      date: "2023-08-31",
      count: 8,
      level: 2,
    },
    {
      date: "2023-09-01",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-02",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-03",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-04",
      count: 3,
      level: 1,
    },
    {
      date: "2023-09-05",
      count: 2,
      level: 1,
    },
    {
      date: "2023-09-06",
      count: 7,
      level: 2,
    },
    {
      date: "2023-09-07",
      count: 5,
      level: 2,
    },
    {
      date: "2023-09-08",
      count: 1,
      level: 1,
    },
    {
      date: "2023-09-09",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-10",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-11",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-12",
      count: 6,
      level: 2,
    },
    {
      date: "2023-09-13",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-14",
      count: 5,
      level: 2,
    },
    {
      date: "2023-09-15",
      count: 8,
      level: 2,
    },
    {
      date: "2023-09-16",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-17",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-18",
      count: 4,
      level: 1,
    },
    {
      date: "2023-09-19",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-20",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-21",
      count: 6,
      level: 2,
    },
    {
      date: "2023-09-22",
      count: 2,
      level: 1,
    },
    {
      date: "2023-09-23",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-24",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-25",
      count: 5,
      level: 2,
    },
    {
      date: "2023-09-26",
      count: 0,
      level: 0,
    },
    {
      date: "2023-09-27",
      count: 7,
      level: 2,
    },
    {
      date: "2023-09-28",
      count: 13,
      level: 3,
    },
    {
      date: "2023-09-29",
      count: 1,
      level: 1,
    },
    {
      date: "2023-09-30",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-01",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-02",
      count: 3,
      level: 1,
    },
    {
      date: "2023-10-03",
      count: 7,
      level: 2,
    },
    {
      date: "2023-10-04",
      count: 8,
      level: 2,
    },
    {
      date: "2023-10-05",
      count: 2,
      level: 1,
    },
    {
      date: "2023-10-06",
      count: 6,
      level: 2,
    },
    {
      date: "2023-10-07",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-08",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-09",
      count: 15,
      level: 4,
    },
    {
      date: "2023-10-10",
      count: 2,
      level: 1,
    },
    {
      date: "2023-10-11",
      count: 6,
      level: 2,
    },
    {
      date: "2023-10-12",
      count: 11,
      level: 3,
    },
    {
      date: "2023-10-13",
      count: 7,
      level: 2,
    },
    {
      date: "2023-10-14",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-15",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-16",
      count: 2,
      level: 1,
    },
    {
      date: "2023-10-17",
      count: 2,
      level: 1,
    },
    {
      date: "2023-10-18",
      count: 10,
      level: 3,
    },
    {
      date: "2023-10-19",
      count: 6,
      level: 2,
    },
    {
      date: "2023-10-20",
      count: 12,
      level: 3,
    },
    {
      date: "2023-10-21",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-22",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-23",
      count: 7,
      level: 2,
    },
    {
      date: "2023-10-24",
      count: 6,
      level: 2,
    },
    {
      date: "2023-10-25",
      count: 18,
      level: 4,
    },
    {
      date: "2023-10-26",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-27",
      count: 6,
      level: 2,
    },
    {
      date: "2023-10-28",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-29",
      count: 0,
      level: 0,
    },
    {
      date: "2023-10-30",
      count: 10,
      level: 3,
    },
    {
      date: "2023-10-31",
      count: 17,
      level: 4,
    },
    {
      date: "2023-11-01",
      count: 3,
      level: 1,
    },
    {
      date: "2023-11-02",
      count: 4,
      level: 1,
    },
    {
      date: "2023-11-03",
      count: 9,
      level: 2,
    },
    {
      date: "2023-11-04",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-05",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-06",
      count: 4,
      level: 1,
    },
    {
      date: "2023-11-07",
      count: 3,
      level: 1,
    },
    {
      date: "2023-11-08",
      count: 6,
      level: 2,
    },
    {
      date: "2023-11-09",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-10",
      count: 16,
      level: 4,
    },
    {
      date: "2023-11-11",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-12",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-13",
      count: 7,
      level: 2,
    },
    {
      date: "2023-11-14",
      count: 10,
      level: 3,
    },
    {
      date: "2023-11-15",
      count: 6,
      level: 2,
    },
    {
      date: "2023-11-16",
      count: 6,
      level: 2,
    },
    {
      date: "2023-11-17",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-18",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-19",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-20",
      count: 4,
      level: 1,
    },
    {
      date: "2023-11-21",
      count: 3,
      level: 1,
    },
    {
      date: "2023-11-22",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-23",
      count: 4,
      level: 1,
    },
    {
      date: "2023-11-24",
      count: 8,
      level: 2,
    },
    {
      date: "2023-11-25",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-26",
      count: 2,
      level: 1,
    },
    {
      date: "2023-11-27",
      count: 8,
      level: 2,
    },
    {
      date: "2023-11-28",
      count: 0,
      level: 0,
    },
    {
      date: "2023-11-29",
      count: 9,
      level: 2,
    },
    {
      date: "2023-11-30",
      count: 11,
      level: 3,
    },
    {
      date: "2023-12-01",
      count: 5,
      level: 2,
    },
    {
      date: "2023-12-02",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-03",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-04",
      count: 11,
      level: 3,
    },
    {
      date: "2023-12-05",
      count: 13,
      level: 3,
    },
    {
      date: "2023-12-06",
      count: 5,
      level: 2,
    },
    {
      date: "2023-12-07",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-08",
      count: 3,
      level: 1,
    },
    {
      date: "2023-12-09",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-10",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-11",
      count: 2,
      level: 1,
    },
    {
      date: "2023-12-12",
      count: 2,
      level: 1,
    },
    {
      date: "2023-12-13",
      count: 6,
      level: 2,
    },
    {
      date: "2023-12-14",
      count: 4,
      level: 1,
    },
    {
      date: "2023-12-15",
      count: 5,
      level: 2,
    },
    {
      date: "2023-12-16",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-17",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-18",
      count: 11,
      level: 3,
    },
    {
      date: "2023-12-19",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-20",
      count: 8,
      level: 2,
    },
    {
      date: "2023-12-21",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-22",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-23",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-24",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-25",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-26",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-27",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-28",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-29",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-30",
      count: 0,
      level: 0,
    },
    {
      date: "2023-12-31",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-01",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-02",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-03",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-04",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-05",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-06",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-07",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-08",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-09",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-10",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-11",
      count: 13,
      level: 3,
    },
    {
      date: "2024-01-12",
      count: 6,
      level: 2,
    },
    {
      date: "2024-01-13",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-14",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-15",
      count: 3,
      level: 1,
    },
    {
      date: "2024-01-16",
      count: 6,
      level: 2,
    },
    {
      date: "2024-01-17",
      count: 7,
      level: 2,
    },
    {
      date: "2024-01-18",
      count: 8,
      level: 2,
    },
    {
      date: "2024-01-19",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-20",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-21",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-22",
      count: 8,
      level: 2,
    },
    {
      date: "2024-01-23",
      count: 7,
      level: 2,
    },
    {
      date: "2024-01-24",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-25",
      count: 7,
      level: 2,
    },
    {
      date: "2024-01-26",
      count: 5,
      level: 2,
    },
    {
      date: "2024-01-27",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-28",
      count: 0,
      level: 0,
    },
    {
      date: "2024-01-29",
      count: 8,
      level: 2,
    },
    {
      date: "2024-01-30",
      count: 12,
      level: 3,
    },
    {
      date: "2024-01-31",
      count: 4,
      level: 1,
    },
    {
      date: "2024-02-01",
      count: 3,
      level: 1,
    },
    {
      date: "2024-02-02",
      count: 0,
      level: 0,
    },
    {
      date: "2024-02-03",
      count: 0,
      level: 0,
    },
    {
      date: "2024-02-04",
      count: 0,
      level: 0,
    },
    {
      date: "2024-02-05",
      count: 4,
      level: 1,
    },
    {
      date: "2024-02-06",
      count: 7,
      level: 2,
    },
    {
      date: "2024-02-07",
      count: 4,
      level: 1,
    },
    {
      date: "2024-02-08",
      count: 1,
      level: 1,
    },
    {
      date: "2024-02-09",
      count: 2,
      level: 1,
    },
    {
      date: "2024-02-10",
      count: 7,
      level: 2,
    },
    {
      date: "2024-02-11",
      count: 1,
      level: 1,
    },
    {
      date: "2024-02-12",
      count: 9,
      level: 2,
    },
    {
      date: "2024-02-13",
      count: 6,
      level: 2,
    },
    {
      date: "2024-02-14",
      count: 6,
      level: 2,
    },
    {
      date: "2024-02-15",
      count: 1,
      level: 1,
    },
    {
      date: "2024-02-16",
      count: 1,
      level: 1,
    },
    {
      date: "2024-02-17",
      count: 0,
      level: 0,
    },
    {
      date: "2024-02-18",
      count: 0,
      level: 0,
    },
    {
      date: "2024-02-19",
      count: 0,
      level: 0,
    },
    {
      date: "2024-02-20",
      count: 1,
      level: 1,
    },
    {
      date: "2024-02-21",
      count: 9,
      level: 2,
    },
    {
      date: "2024-02-22",
      count: 5,
      level: 2,
    },
    {
      date: "2024-02-23",
      count: 13,
      level: 3,
    },
    {
      date: "2024-02-24",
      count: 0,
      level: 0,
    },
    {
      date: "2024-02-25",
      count: 0,
      level: 0,
    },
    {
      date: "2024-02-26",
      count: 10,
      level: 3,
    },
    {
      date: "2024-02-27",
      count: 12,
      level: 3,
    },
    {
      date: "2024-02-28",
      count: 8,
      level: 2,
    },
    {
      date: "2024-02-29",
      count: 3,
      level: 1,
    },
    {
      date: "2024-03-01",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-02",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-03",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-04",
      count: 5,
      level: 2,
    },
    {
      date: "2024-03-05",
      count: 4,
      level: 1,
    },
    {
      date: "2024-03-06",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-07",
      count: 12,
      level: 3,
    },
    {
      date: "2024-03-08",
      count: 2,
      level: 1,
    },
    {
      date: "2024-03-09",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-10",
      count: 1,
      level: 1,
    },
    {
      date: "2024-03-11",
      count: 9,
      level: 2,
    },
    {
      date: "2024-03-12",
      count: 3,
      level: 1,
    },
    {
      date: "2024-03-13",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-14",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-15",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-16",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-17",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-18",
      count: 3,
      level: 1,
    },
    {
      date: "2024-03-19",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-20",
      count: 2,
      level: 1,
    },
    {
      date: "2024-03-21",
      count: 4,
      level: 1,
    },
    {
      date: "2024-03-22",
      count: 3,
      level: 1,
    },
    {
      date: "2024-03-23",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-24",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-25",
      count: 6,
      level: 2,
    },
    {
      date: "2024-03-26",
      count: 1,
      level: 1,
    },
    {
      date: "2024-03-27",
      count: 21,
      level: 4,
    },
    {
      date: "2024-03-28",
      count: 6,
      level: 2,
    },
    {
      date: "2024-03-29",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-30",
      count: 0,
      level: 0,
    },
    {
      date: "2024-03-31",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-01",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-02",
      count: 1,
      level: 1,
    },
    {
      date: "2024-04-03",
      count: 2,
      level: 1,
    },
    {
      date: "2024-04-04",
      count: 4,
      level: 1,
    },
    {
      date: "2024-04-05",
      count: 7,
      level: 2,
    },
    {
      date: "2024-04-06",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-07",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-08",
      count: 10,
      level: 3,
    },
    {
      date: "2024-04-09",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-10",
      count: 1,
      level: 1,
    },
    {
      date: "2024-04-11",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-12",
      count: 14,
      level: 4,
    },
    {
      date: "2024-04-13",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-14",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-15",
      count: 8,
      level: 2,
    },
    {
      date: "2024-04-16",
      count: 8,
      level: 2,
    },
    {
      date: "2024-04-17",
      count: 3,
      level: 1,
    },
    {
      date: "2024-04-18",
      count: 10,
      level: 3,
    },
    {
      date: "2024-04-19",
      count: 11,
      level: 3,
    },
    {
      date: "2024-04-20",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-21",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-22",
      count: 8,
      level: 2,
    },
    {
      date: "2024-04-23",
      count: 3,
      level: 1,
    },
    {
      date: "2024-04-24",
      count: 4,
      level: 1,
    },
    {
      date: "2024-04-25",
      count: 4,
      level: 1,
    },
    {
      date: "2024-04-26",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-27",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-28",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-29",
      count: 0,
      level: 0,
    },
    {
      date: "2024-04-30",
      count: 10,
      level: 3,
    },
    {
      date: "2024-05-01",
      count: 1,
      level: 1,
    },
    {
      date: "2024-05-02",
      count: 5,
      level: 2,
    },
    {
      date: "2024-05-03",
      count: 1,
      level: 1,
    },
    {
      date: "2024-05-04",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-05",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-06",
      count: 2,
      level: 1,
    },
    {
      date: "2024-05-07",
      count: 3,
      level: 1,
    },
    {
      date: "2024-05-08",
      count: 23,
      level: 4,
    },
    {
      date: "2024-05-09",
      count: 2,
      level: 1,
    },
    {
      date: "2024-05-10",
      count: 2,
      level: 1,
    },
    {
      date: "2024-05-11",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-12",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-13",
      count: 6,
      level: 2,
    },
    {
      date: "2024-05-14",
      count: 9,
      level: 2,
    },
    {
      date: "2024-05-15",
      count: 1,
      level: 1,
    },
    {
      date: "2024-05-16",
      count: 8,
      level: 2,
    },
    {
      date: "2024-05-17",
      count: 6,
      level: 2,
    },
    {
      date: "2024-05-18",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-19",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-20",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-21",
      count: 2,
      level: 1,
    },
    {
      date: "2024-05-22",
      count: 1,
      level: 1,
    },
    {
      date: "2024-05-23",
      count: 9,
      level: 2,
    },
    {
      date: "2024-05-24",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-25",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-26",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-27",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-28",
      count: 2,
      level: 1,
    },
    {
      date: "2024-05-29",
      count: 3,
      level: 1,
    },
    {
      date: "2024-05-30",
      count: 0,
      level: 0,
    },
    {
      date: "2024-05-31",
      count: 4,
      level: 1,
    },
    {
      date: "2024-06-01",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-02",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-03",
      count: 4,
      level: 1,
    },
    {
      date: "2024-06-04",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-05",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-06",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-07",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-08",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-09",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-10",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-11",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-12",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-13",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-14",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-15",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-16",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-17",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-18",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-19",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-20",
      count: 1,
      level: 1,
    },
    {
      date: "2024-06-21",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-22",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-23",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-24",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-25",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-26",
      count: 4,
      level: 1,
    },
    {
      date: "2024-06-27",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-28",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-29",
      count: 0,
      level: 0,
    },
    {
      date: "2024-06-30",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-01",
      count: 3,
      level: 1,
    },
    {
      date: "2024-07-02",
      count: 1,
      level: 1,
    },
    {
      date: "2024-07-03",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-04",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-05",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-06",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-07",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-08",
      count: 4,
      level: 1,
    },
    {
      date: "2024-07-09",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-10",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-11",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-12",
      count: 3,
      level: 1,
    },
    {
      date: "2024-07-13",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-14",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-15",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-16",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-17",
      count: 0,
      level: 0,
    },
    {
      date: "2024-07-18",
      count: 2,
      level: 1,
    },
  ],
};

const blogData = {
  blogs: [
    {
      url: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      url: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      url: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      url: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      url: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      url: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
  ],
};
const achievementSection = {
  title: "Achievements",
  subtitle: "Achievements",
  achivementsCards: [
    {
      footerLink: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      footerLink: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      footerLink: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      footerLink: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      footerLink: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
    {
      footerLink: "https://pureheartgharoro.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Nomba Checkout",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, diam sed placerat maximus, leo lectus venenatis diam, vel posuere purus urna non leo. Mauris efficitur enim id bibendum condimentum. Nulla lacinia, nisi id sagittis dapibus, ex lectus consectetur magna, at vehicula mauris tellus vel tortor. Etiam eget placerat lacus. Sed facilisis nibh quis velit malesuada, nec aliquet sapien mattis. Cras eu fermentum massa.",
    },
  ],
};

const projects = {
  data: [
    {
      title: "Nomba Checkout",
      description:
        "Nomba Checkout serves as a versatile payment gateway, empowering businesses to seamlessly accept payments from customers. This platform facilitates transactions through bank transfers or the use of local and international debit cards. Notably, it offers support for major card networks, including Mastercard, Visa, Verve and American Express. Businesses can leverage Nomba Checkout to enhance their payment processing capabilities, providing customers with a convenient and secure way to make transactions.",
      image: checkoutImg,
      link: "https://nomba.com/checkout/",
    },
    {
      title: "KRIS",
      description:
        "Revolutionizing HR management by offering an all-in-one platform that simplifies payroll automation, hiring, and employee management.",
      image: krisImg,
      link: "https://kris-landing-page-95d468fef87f.herokuapp.com/",
    },
    {
      title: "Edves LMS Portal",
      description:
        "An all-in-one Learning and School Management Software. With a variety  of tools from Results portals, managing attendance, schedules for various classes, tracking homework and assignments to managing you schools admin tasks, financial transactions, ensuring that your school runs smoothly.",
      image: edvesImg,
      link: "https://www.edves.net/demo",
    },
    {
      title: "Kracada",
      description:
        "All-in-one entertainment and lifestyle app. See the latest gist, find jobs, explore new places, book hotels etc.",
      image: kracadaImg,
      link: "https://www.kracada.com/",
    },
  ],
};
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  githubData,
  blogData,
  achievementSection,
  projects,
};
