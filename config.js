
module.exports = {
  pathPrefix: '/gatsby-starter-developer-blog',
  siteUrl: 'https://autodidactic.netlify.com',
  siteTitle: 'Tyler Moore',
  siteDescription: 'Logbook of a Software Developer',
  author: 'tyler',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  //disqusScript: 'https://luigi-colella.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    about: 'about',
    tag: 'tag',
    archive: 'archive'
  },
  social: {
    github: 'https://github.com/mary-tyler-moore',
    rss: '/rss.xml'
  },
  tags: {
    angular: {
      description: 'Angular is an open source web application platform.'
    },
    javascript: {
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.'
    },
    lambda: {
      name: 'AWS Lambda',
      description: 'AWS Lambda is an event-driven, serverless computing platform that runs code in response to events and automatically manages the computing resources required by that code. '
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.'
    },
    sass: {
      description: 'Sass is a stable extension to classic CSS.'
    },
    typescript: {
      name: 'TypeScript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
    },
    react: {
      description: 'React is an open source JavaScript library used for designing user interfaces.'
    },
    graphql: {
      name: 'GraphQL',
      description: 'GraphQL is an open source JavaScript library.'
    },
    ionic: {
      description: 'Ionic is a complete open-source SDK for hybrid mobile app development built on top of AngularJS and Apache Cordova.'
    },
    docker: {
      name: 'Docker',
      description: 'Docker is a collection of interoperating software-as-a-service and platform-as-a-service offerings that employ operating-system-level virtualization to cultivate development and delivery of software inside standardized software packages called containers.'
    },
    postgres: {
      name: 'PostgresSQL',
      description: 'PostgreSQL is a free and open-source relational database management system emphasizing extensibility and standards compliance. It is designed to handle workloads from single-machine applications to data warehousing or Web services with many concurrent users. '
    },
    nuxt: {
      description: 'Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Express.js, Webpack and Babel.js. The framework is advertised as a meta-framework for universal applications.'
    },
    pwa: {
      name: 'PWA',
      description: 'Progressive web applications are web applications that load like regular web pages or websites but can offer the user functionality such as working offline, push notifications, and device hardware access traditionally available only to native applications.'
    },
    redux: {
      decription: 'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.'
    },
    firebase: {
      description: 'Firebase is a mobile and web application development platform acquired by Google in 2014. As of October 2018, the Firebase platform has 18 products, which are used by 1.5 million apps'
    },
    gatsby: {
      name: "GatsbyJS",
      decription: 'Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.'
    },
    github: {
      description: 'Github is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.'
    },
    netlify: {
      description: 'Netlify is a cloud computing company that offers hosting and serverless backend services for static websites. It features continuous deployment from Git across a global application delivery network, serverless form handling, support for AWS Lambda functions, and HTTPS by default.'
    },
    webpack: {
      name: 'Webpack',
      description: 'Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.'
    },
    lighthouse: {
      name: 'Lighthouse Audits',
      description: 'Lighthouse is an open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, and more.'
    },
    wcag: {
      name: 'WCAG 2.0',
      description: 'The Web Content Accessibility Guidelines (WCAG) are a set of recommendations for making Web content more accessible, primarily for people with disabilities—but also for all user agents, including highly limited devices, such as mobile phones.'
    },
    vuejs: {
      name: 'Vue.js',
      description: 'Vue.js is a JavaScript framework for building interactive web applications.'
    }
  }
}
