// gitprofile.config.js

const config = {
  github: {
    username: 'qurriahSam', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [
        'alx-low_level_programming',
        'alx-higher_level_programming',
        'dsa-c',
        'qurriahSam',
        'ng-todo',
        'fcc-urlShortener-microservice',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sam-kuria',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'sammugire',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'sammugire@gmail.com',
  },
  resume: {
    fileUrl: './src/assets/KuriaSamResume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'Express.js',
    'Angular',
    'Python',
    'Ruby',
    'Ruby On Rails',
    'C',
    'MongoDB',
    'MySQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'iTalanta',
      position: 'Software Developer Intern',
      from: 'Sept 2022',
      to: 'December 2022',
      companyLink: 'https://italanta.net',
      tasks: [
        'Using AngularJs and angular material to build the frontend.',
        'Involved in adding bot translations in english and french.',
        'Implemented block layouts and functionality.',
      ],
    },
    {
      company: 'Remotasks',
      position: 'LiDar Data Annotator',
      from: 'Aug 2020',
      to: 'Nov 2021',
      companyLink: 'https://www.remotasks.com/en',
      tasks: [
        'Tasked with providing high-quality annotations for training data used to develop and improve AI models.',
        'Involved in training new members on more complex tasks ( Lidar and Videobox Annotations ).',
      ],
    },
    {
      company: 'Kenya Vision 2030 Secretariat',
      position: 'IT Support Specialist',
      from: 'Jan 2017',
      to: 'Apr 2018',
      companyLink: 'https://vision2030.go.ke',
      tasks: [
        'Made recommended changes on the company website.',
        'Provided technical assistance to employees of the company.',
        'Provided routine computer maintenance, troubleshooted computer issues, and set up user accounts.',
      ],
    },
  ],
  certifications: [
    {
      name: "Backend Development & API'S",
      body: 'FreeCodeCamp',
      year: 'May 2023',
      link: 'https://www.freecodecamp.org/certification/qurriah/back-end-development-and-apis',
    },
    {
      name: 'JavaScript Alogrithms & DataStructures',
      body: 'FreeCodeCamp',
      year: 'Nov 2021',
      link: 'https://www.freecodecamp.org/certification/qurriah/javascript-algorithms-and-data-structures',
    },
    {
      name: 'Responsive Web Design',
      body: 'FreeCodeCamp',
      year: 'May 2021',
      link: 'https://www.freecodecamp.org/certification/qurriah/responsive-web-design',
    },
    {
      name: 'Computer Science',
      body: 'ACWICT',
      year: 'March 2021',
      link: 'https://drive.google.com/file/d/1ysh_iHkgsFywYFkIT1n6SpdVTSdR3USL/view?usp=share_link',
    },
    {
      name: 'Wordpress Websites',
      body: 'Junior Achievement Africa',
      year: 'Dec 2020',
      link: 'https://drive.google.com/file/d/1YXDF05IXGbMAo395huhAEu6WlIlSY2q8/view?usp=share_link',
    },
  ],
  education: [
    {
      institution: 'ALX-SE',
      degree: 'Software Engineering Bootcamp',
      from: 'July 2023',
      to: 'present',
      tasks: [
        'C programming',
        'Data Structures & Algorithims',
        'Bit Manipulation',
        'Memory Management',
      ],
    },
    {
      institution: 'Moringa School',
      degree: 'Software Engineering Bootcamp',
      from: 'Feb 2022',
      to: 'Aug 2022',
      tasks: ['HTML, CSS3 & JavaScript', 'React & Ruby on Rails'],
    },
    {
      institution: 'Moi University',
      degree: 'Bachelors in Business Information Technology',
      from: 'Sep 2015',
      to: 'Dec 2018',
      tasks: [
        'Fundamentals of Computer Systems',
        'Object Oriented Programming',
        'Networks and Data Communication',
      ],
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Muz!ki',
      description:
        'Mooz!ki for music lovers enables users to upload, explore and discover new music.',
      imageUrl: 'muziki',
      link: 'https://github.com/qurriahSam/muziki',
      tags: ['React', 'Ruby On Rails'],
    },
    {
      title: 'Header-Parser-Microservice',
      description:
        'Convenient and efficient means for users to retrieve and view critical information pertaining to their IP address, language, and software configuration.',
      imageUrl: 'headerParser',
      link: 'https://github.com/qurriahSam/fcc-header-parser-microservice',
      tags: ['NodeJs', 'ExpressJs', 'MongoDB'],
    },
    {
      title: 'Ng-ToDo',
      description: 'A simple and efficient to-do list manager',
      imageUrl: 'todo',
      link: 'https://github.com/qurriahSam/ng-todo',
      tags: ['Angular', 'localStorage'],
    },
    {
      title: 'URL.Shortener-Microservice',
      description: 'A microservice that shortens links provided',
      imageUrl: 'urlShortner',
      link: 'https://github.com/qurriahSam/fcc-urlShortener-microservice',
      tags: ['NodeJs', 'ExpressJs', 'MongoDB'],
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'sammugire', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `&copy <a 
      class="text-primary" href="https://github.com/qurriahSam"
      target="_blank"
      rel="noreferrer"
    >Sam_Kuriah</a> 2023`,
};

export default config;
