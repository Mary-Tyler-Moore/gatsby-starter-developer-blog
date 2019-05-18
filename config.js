
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
    electron: {
      description: 'Electron is a framework for building cross-platform desktop applications with web technology.'
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
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.'
    },
    sass: {
      description: 'Sass is a stable extension to classic CSS.'
    },
    typescript: {
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
    },
    react: {
      description: 'React is an open source JavaScript library used for designing user interfaces.'
    },
    graphql: {
      name: 'GraphQL',
      description: 'GraphQL is an open source JavaScript library.'
    },
    vuejs: {
      name: 'Vue.js',
      description: 'Vue.js is a JavaScript framework for building interactive web applications.'
    }
  }
}