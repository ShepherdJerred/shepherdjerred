export default {
  projects: {
    raspastat: {
      title: 'Raspastat',
      summary: 'Create a smart thermostats with a Raspberry Pi',
      description: 'Raspastat is a combination of two projects. raspastat-core is a Java application which runs on a' +
      ' Raspberry Pi. It interfaces with an AC unit and thermometer, and exposes an API through redis.' +
      ' raspastat-web provides a web interface for the thermometer and REST API that interfaces with the core module through redis.',
      tags: [
        'Java',
        'redis',
        'Spark Framework'
      ],
      color: '#97CE68',
      icon: 'thermometer',
      links: [
        {
          name: 'raspastat-core on GitHub',
          link: 'https://github.com/shepherdjerred/raspastat-core'
        },
        {
          name: 'raspastat-web on GitHub',
          link: 'https://github.com/shepherdjerred/raspastat-web'
        }
      ],
      process: {
        1: {
          title: 'Interfacing with hardware',
          description: ''
        },
        2: {
          title: 'Writing core logic',
          description: ''
        },
        3: {
          title: 'Create a web interface and REST API',
          description: ''
        },
        4: {
          title: 'Deploying & testing',
          description: ''
        },
        5: {
          title: 'Future plans',
          description: ''
        }
      }
    },
    siphon: {
      title: 'Siphon',
      summary: 'Better navigation for Harding\'s Pipeline',
      description: 'Siphon improves the terrible navigation of Harding\'s Pipeline website, which is the Universities' +
      ' website for students to perform tasks such as registering for classes or reviewing financial aid. Siphon was' +
      ' originally meant to show Pipeline content in page with iframes (rather than simply listing links), however this' +
      ' was removed at the request of Harding\'s IS&T department. Siphon will also allow users to view Canvas and EASEL' +
      ' grades on a convenient dashboard.',
      tags: [
        'Vue',
        'Java'
      ],
      color: '#22313f',
      icon: 'university',
      links: [
        {
          name: 'siphon-vue on GitHub',
          link: 'https://github.com/shepherdjerred/siphon-vue'
        },
        {
          name: 'siphon on GitHub',
          link: 'https://github.com/shepherdjerred/siphon'
        },
        {
          name: 'Live Site',
          link: 'http://hu-siphon.com'
        }
      ],
      process: {
        1: {
          title: 'Figuring out workflow',
          description: ''
        },
        2: {
          title: 'Experimenting with Vue',
          description: ''
        },
        3: {
          title: 'Creating a scaper and using Canvas\'s API',
          description: ''
        },
        4: {
          title: 'iFrames with Vue router',
          description: ''
        },
        5: {
          title: 'Deployment',
          description: ''
        },
        6: {
          title: 'Future plans',
          description: ''
        }
      }
    },
    thebutton: {
      title: 'The Button',
      summary: 'A simple application using Vue',
      description: 'The Button was created at the suggestion of a friend, who had the simple idea of a webpage with a counter' +
      ' and a button that incremented the counter. I took on the project as a chance to learn Vue. The application uses' +
      ' Java for the backend, with the Spark Framework to serve static files and provide a REST API',
      tags: [
        'Vue',
        'Java',
        'Heroku',
        'MySQL',
        'Spark Framework'
      ],
      color: '#E84545',
      icon: 'circle',
      links: [
        {
          name: 'GitHub',
          link: 'https://github.com/shepherdjerred/the-button'
        },
        {
          name: 'Live Site',
          link: 'https://the-button-app.heroku-app.com'
        }
      ],
      process: {
        1: {
          title: 'Learning Vue',
          description: ''
        },
        2: {
          title: 'Gulp vs Webpack vs Browserify',
          description: ''
        },
        3: {
          title: 'Creating the application',
          description: ''
        },
        4: {
          title: 'Setting up on Heroku',
          description: ''
        },
        5: {
          title: 'Future plans',
          description: ''
        }
      }
    }
  }
}
