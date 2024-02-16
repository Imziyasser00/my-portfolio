// src/data/projectsData.js
const projects = [
    {
      id:1,
      title: "Tapis Rouges",
      description: "Developed a comprehensive restaurant website as part of a front-end internship, showcasing my skills in HTML, CSS, and JavaScript. The website consists of seven pages, each serving a unique purpose to enhance the user experience.",
      image:  require('./images/Tapis_rouges.png'),
      liveDemoLink: "https://agitated-swanson-b1aba5.netlify.app/",
      githubLink: "https://github.com/Imziyasser00/Tapis-Rouges",
      technologies: ["HTML","CSS","JAVASCRIPT"],
      KeyFeatures: [
        "Engaging User Interface",
        "Online Ordering Functionality",
        "Team Showcase",
        "Interactive Gallery",
        "Contact Form"
      ],
    },{
      id: 2,
      title: "Let's Do It",
      description: 'Immerse yourself in a cutting-edge T-shirt customization experience with our ThreeJs-powered platform. Unleash your creativity by dynamically changing T-shirt colors, exploring smooth mouse-driven movements, and personalizing your apparel with uploaded logos and textures. Elevate your fashion game in real-time!',
      image: require('./images/3DTShirt.png'),
      liveDemoLink: "https://serene-dasik-eb2298.netlify.app/",
      githubLink: "https://github.com/Imziyasser00/threeJs-website",
      technologies: [
        "React",
        "ThreeJs",
        "HTML",
        "CSS",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "ESLint",
        "PostCSS",
      ],
      KeyFeatures: [
        "T-shirt color customization",
        "Fluid mouse-controlled T-shirt movement",
        "Seamless logo and texture uploading",
      ],
    },    
    {
      id: 3,
      title: "Weather PWA",
      description: 'A progressive web app for checking the weather forecast.',
      image: require('./images/PWA.png'),
      liveDemoLink: "https://astounding-pothos-aad407.netlify.app/",
      githubLink: "https://github.com/Imziyasser00/PWA_FIRST_APP", 
      technologies: ["React", "Axios"],
      KeyFeatures: [
        "PWA functionality (offline support, add to home screen)",
        "Real-time weather updates",
        "User-friendly interface",
        "Responsive design",
        "Integration with a weather API (using Axios)"
      ],
    },{    
      id:4,
      title: "AI Article Summarizer",
      description: 'Unlock the power of instant comprehension with our Summarizer. Effortlessly distill lengthy content into concise summaries, saving you time and delivering the essence of information. Simplify complexity and stay informed at a glance.',
      image: require('./images/summarizer.png'),
      liveDemoLink: "https://65c8f7a651792f3b9dfbd81b--idyllic-dolphin-5b9ec6.netlify.app/",
      githubLink: "https://github.com/Imziyasser00/AISummarizer_website",
      technologies : ["React", "@mantine/core", "@mantine/hooks", "@reduxjs/toolkit", "react-icons", "react-loader-spinner", "react-redux"],
      KeyFeatures: ["Real-time Updates", "Search Functionality", "Responsive Design", "Integration with APIs"],
    },
   
  ];
  
  export default projects;
  