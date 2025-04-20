/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Omkar Ashok Karale",
  title: "Hi all, I'm (O.K)",
  subTitle: emoji(
    "Final Year BE Computer Engineering | Python & Web Dev Enthusiast | Learning OpenCV | Building Real-World Projects | Open to Internships & Full-Time Roles"
  ),
  resumeLink:
    "https://drive.google.com/file/d/10uqQ2wbdIju5Vjd1g6J-Q0NsFzWjXouQ/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Omkarok2510",
  linkedin: "https://www.linkedin.com/in/omkar-karale-21881a281/",
  gmail: "omkarok2510@gmail.com",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@omkarok2510",
  stackoverflow: "https://stackoverflow.com/users/30252019/omkar-karale",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS PYTHON & DATA SCIENCE DEVELOPER WHO BUILDS COOL PROJECTS AND LOVES EXPLORING TECH STACKS",
  skills: [
    emoji("⚡ Build intelligent Computer Vision apps using OpenCV & MediaPipe"),
    emoji("⚡ Create interactive web apps with HTML, CSS, JavaScript & React"),
    emoji("⚡ Work with data using Python, Pandas, and many More to build Data Science models"),
    emoji("⚡ Integrate APIs and cloud services like AWS and GitHub"),
    emoji("⚡ Passionate about turning real-world ideas into working code 🚀")
  ]
  ,

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Django",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  }
],
display: true
,
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
    schools: [
      {
        schoolName: "Savitribai Phule Pune University",
        logo: require("./assets/images/puneUniversityLogo.png"),
        subHeader: "Bachelor of Engineering in Computer Engineering",
        duration: "August 2021 - May 2025",
        desc: "Final Year Student with strong foundation in Full Stack Development, SDN, and Inventory Management Systems.",
        descBullets: [
          "Built final year project 'Invenlytics' for Haier India",
          "Completed multiple internships and coding challenges"
        ]
      },
    
    {
      schoolName: "New Beginning International School",
      logo: require("./assets/images/nbisLogo.png"),
      subHeader: "Central Board of Secondary Education (CBSE)",
      duration: "June 2018 - May 2019",
      desc: "Completed Secondary Schooling (Class 10th) under the Central Board of Secondary Education (CBSE) curriculum.",
descBullets: [
  "Secured 83.4% in Class 10 Board Examination",
  "Awarded for excellence in Mathematics and Science",
  "Actively participated in school-level Olympiads and co-curricular activities"
]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true
};

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data An",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Final Year Project: Invenlytics for Haier",
      subtitle:
        "Built a real-time Inventory Analytics System to reduce part replacement delays and prevent counterfeit parts for Haier Service Center.",
      image: require("./assets/images/haierLogo.png"),
      imageAlt: "Haier Logo",
      footerLink: [
        {
          name: "Project GitHub",
          url: "https://github.com/Omkarok2510/Invenlytics"
        },
        {
          name: "Presentation Deck",
          url: "https://drive.google.com/your-project-deck"
        }
      ]
    },
    {
      title: "CODSOFT Full Stack Internship",
      subtitle:
        "Completed a hands-on internship with projects in role-based authentication systems and rating applications using React.js, Node.js, and MySQL.",
      image: require("./assets/images/codsoftLogo.png"),
      imageAlt: "CODSOFT Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/your-certificate-link"
        },
        {
          name: "Project Demo",
          url: "https://github.com/Omkarok2510/YourProjectRepo"
        }
      ]
    },
    {
      title: "Hackathon Finalist",
      subtitle:
        "Participated in Smart India Hackathon 2024 and reached the final round with a team project on public transportation optimization.",
      image: require("./assets/images/hackathonLogo.png"),
      imageAlt: "Hackathon Logo",
      footerLink: [
        {
          name: "SIH Profile",
          url: "https://sih.gov.in/your-team-link"
        }
      ]
    },
    {
      title: "Python for Everybody",
      subtitle:
        "Completed the 'Python for Everybody' Specialization by the University of Michigan on Coursera.",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/verify/your-cert-id"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Building Inventory Management Systems",
      subtitle: "Workshop at CODSOFT Developer Meetup 2024",
      slides_url: "https://bit.ly/your-slide-deck-link",
      event_url: "https://www.meetup.com/codsoft-developer-meetup/events/your-event-link/"
    },
    {
      title: "Introduction to Python for Data Science",
      subtitle: "Session at TechTalks Pune 2024",
      slides_url: "https://bit.ly/python-datascience-slides",
      event_url: "https://www.facebook.com/events/tech-talks-pune"
    },
    {
      title: "The Future of SDN and Cloud Networking",
      subtitle: "Talk at Hackathon Meet-up 2024",
      slides_url: "https://bit.ly/sdn-future-talk-slides",
      event_url: "https://www.eventbrite.com/e/sdn-and-cloud-networking-event"
    }
  ],
  display: true
};


// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeUrl:
    "https://drive.google.com/file/d/10uqQ2wbdIju5Vjd1g6J-Q0NsFzWjXouQ/view?usp=sharing",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8624013521",
  email_address: "omkarok2510@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
