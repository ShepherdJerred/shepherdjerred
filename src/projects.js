export default {
  projects: {
    raspastat: {
      title: 'Raspastat',
      summary: 'Create a smart thermostat with a Raspberry Pi',
      description: `Raspastat is a combination of two projects. raspastat-core is a Java application which runs on a
      Raspberry Pi. It interfaces with an AC unit and thermometer, and exposes an API through redis.
      raspastat-web provides a web interface for the thermometer and REST API that interfaces with the core module through redis.`,
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
          description: ``
        },
        2: {
          title: 'Writing core logic',
          description: ``
        },
        3: {
          title: 'Create a web interface and REST API',
          description: ``
        },
        4: {
          title: 'Deploying & testing',
          description: ``
        },
        5: {
          title: 'Future plans',
          description: ``
        }
      }
    },
    siphon: {
      title: 'Siphon',
      summary: 'Better navigation for Harding\'s Pipeline',
      description: `Siphon improves the terrible navigation of Harding's Pipeline website, which is the Universities
      website for students to perform tasks such as registering for classes or reviewing financial aid. Siphon was
      originally meant to show Pipeline content in page with iframes (rather than simply listing links), however this
      was removed at the request of Harding's IS&T department. Siphon will also allow users to view Canvas and EASEL
      grades on a convenient dashboard.`,
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
          description: ``
        },
        2: {
          title: 'Experimenting with Vue',
          description: ``
        },
        3: {
          title: 'Creating a scaper and using Canvas\'s API',
          description: ``
        },
        4: {
          title: 'iFrames with Vue router',
          description: ``
        },
        5: {
          title: 'Deployment',
          description: ``
        },
        6: {
          title: 'Future plans',
          description: ``
        }
      }
    },
    thebutton: {
      title: 'The Button',
      summary: 'A simple game using Vue',
      time: 'February 2017',
      description: `The Button was created at the suggestion of a friend, who had the simple idea of a webpage with a counter
      and a button that incremented the counter. I took on the project as a chance to learn Vue. The application uses
      Java for the backend, with the Spark Framework to serve static files and provide a REST API`,
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
          link: 'https://github.com/shepherdjerred/thebutton'
        },
        {
          name: 'Live Site',
          link: 'https://the-button-app.heroku-app.com'
        }
      ],
      process: {
        1: {
          title: 'Learning Vue',
          description: `I started this project with the intent to learn Vue, and to finally gain a good grasp of the
          JavaScript language. I went in with no knowledge of creating real JavaScript applications. After about a week
          of working with Vue, I understood the basics of the framework and how components interact. By this point, creating
          the application was a rather trivial task requiring only a few basic components.`
        },
        2: {
          title: 'Picking a JavaScript build tool',
          description: `After understanding the foundations of Vue, I wanted to use single-file components,
          which seemed to be a huge benefit of use a front-end framework like Vue. This was a challenge due to my lack
          of experience with JavaScript build tools. After trying out the three most popular build tools, Gulp, Webpack,
          and Browerify, I settled with Webpack as that seemed to be the recommended route with Vue.`
        },
        3: {
          title: 'Creating the back end',
          description: `The next step was to have my web application actually do something. Since I was
          already familiar with the Spark Framework, a web framework for Java, I went with it. I created a simple application
          that would track button clicks, and save it to a database. This application would also serve the web interface
          to clients.`
        },
        4: {
          title: 'Setting up on Heroku',
          description: `With all of the software being written, I only had to deploy my application for it to be completed,
          and for my friend's dream of a button to be fulfilled. Since this is a small project without any requirements
          as far as response time goes, I put it up on Heroku. It has since been clicked over 110,000 times as of this writing.`
        },
        5: {
          title: 'Future plans',
          description: `I have many ideas for this application, however I'm currently busy with more worthwhile projects.
          I would like to have the counter automatically reset once reaching it's limit, and to provide some sort of incentive
          for clicking the button, probably something basic such as unlocking new colors. As far as refactoring goes, it
          could definitely benefit from a minor rewrite. With this being my first Vue project, I made plenty of mistakes.
          I also made a few bad choices when structuring the Java application.`
        }
      }
    }
  }
}
